const User = require('../models/user')
const { generateToken } = require("../helpers/jwt")
const { comparePassword } = require("../helpers/bcrypt");

exports.signup = (req, res, next) => {
  let user = {
    email: req.body.email,
    password: req.body.password
  }
  User.findUser(user.email)
  .then(data => {
    if(data.data){
      throw { name: 'customError', status: 400, msg: 'Email already exists'}
    } else {
      return User.addUser(user)
    }
  })
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => [
    next(err)
  ])
}

exports.signupAdmin = (req, res, next) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
    role: 'admin'
  }
  User.findUser(user.email)
  .then(data => {
    if(data.data){
      throw { name: 'customError', status: 400, msg: 'Email already exists'}
    } else {
      return User.addAdmin(user)
    }
  })
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => [
    next(err)
  ])
}

exports.signin = (req, res, next) => {
  let user = {
    email: req.body.email,
    password: req.body.password
  }
  User.findUser(user.email)
  .then(data => {
    if(!data.data){
      throw { name: 'customError', status: 400, msg: 'Invalid email or password'}
    } else {
      const comparedPassword = comparePassword(user.password, data.data.password) //comparing user input pass and user pass in db
      if(!comparePassword) throw { name: 'CustomError', msg: 'Invalid email or password', status: 400 }

      const token = generateToken({
        email: user.email,
        role: data.data.role,
      })
      console.log(token, 'asd')
      res.status(200).json({token})
    }
  })
  .catch(err => {
    console.log(err)
    next(err)
  })
}

exports.findEmail = (req, res, next) => {
  let data = {
    email: req.body.email,
  }
  User.findUser(data.email)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
}