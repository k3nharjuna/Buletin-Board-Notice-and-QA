const mongoose = require('./configs')
const { Schema } = mongoose

const noticeSchema = Schema({
  email: String,
  title: String,
  content: String,
  }, {timestamps : true, collection : 'notice'})

const qaSchema = Schema({
  email: String,
  title: String,
  question: String,
  answers: [{
    email: { type: String},
    answer: { type: String}
  }],
  status: { type: Boolean, default: false }
}, {timestamps : true, collection : 'qa'})

const Notice = mongoose.model("Notice", noticeSchema)
const Qa = mongoose.model("Qa", qaSchema)

//create
exports.addNotice = (data) => {
  let { email, title, content } = data
  return new Promise((resolve, reject) => {
    Notice.create({
      email,
      title,
      content
    }, (err, res) => {
      console.log(res)
      if(!err) resolve({msg: "Notice Created!", data: res})
      else reject(err)
    })
  })
}

exports.addQuestion = (data) => {
  let { email, title, question } = data
  return new Promise((resolve, reject) => {
    Qa.create({
      email, title, question
    }, (err, res) => {
      console.log(res)
      if(!err) resolve({msg: "Question Created!", data: res})
      else reject(err)
    })
  })
}

exports.addAnswer = (data) => {
  let { email, answer, id } = data
  return new Promise((resolve, reject) => {
    Qa.findOneAndUpdate({_id: id}, { 
      $push: { 
        answers: {
          "email": email,
          "answer": answer
        }
      }}, {new: true }, (err, res) => {
        if(!err) resolve({msg: "Answer Created!", data: res})
        else reject(err)
      })
  })
}

exports.getAllNotices = () => {
  return new Promise((resolve, reject) => {
    Notice.find({}, (err, res) => {
      if(!err) resolve({msg: "Data(s) Found!", data: res})
        else reject(err)
    })
  })
}

exports.getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    Qa.find({}, (err, res) => {
      if(!err) resolve({msg: "Data(s) Found!", data: res})
      else reject(err)
    })
  })
}