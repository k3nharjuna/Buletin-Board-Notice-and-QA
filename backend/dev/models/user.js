const mongoose = require('./configs')
const { Schema } = mongoose
const { hashPassword } = require('../helpers/bcrypt')

const userSchema = Schema({
  email: String,
  password: String,
  role: { type: String, default: 'user' }
  }, {timestamps : true, collection : 'user'});

const User = mongoose.model("User", userSchema)

exports.addUser = (data) => {
  let { email, password } = data
  return new Promise((resolve, reject) => {
    User.create({
      email,
      password: hashPassword(password)
    }, (err, res) => {
      console.log(res)
      if(!err) resolve({msg: "User Created!", data: res})
      else reject(err)
    })
  })
}

exports.addAdmin = (data) => {
  let { email, password, role } = data
  return new Promise((resolve, reject) => {
    User.create({
      email,
      password: hashPassword(password),
      role
    }, (err, res) => {
      console.log(res)
      if(!err) resolve({msg: "User Created!", data: res})
      else reject(err)
    })
  })
}

exports.findUser  = (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({email}, (err, res) => {
      if(!err) resolve({data: res})
      else reject(err)
    })
  })
}
