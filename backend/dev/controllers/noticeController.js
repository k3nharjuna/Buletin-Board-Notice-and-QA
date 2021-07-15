const Notice = require('../models/notice')

exports.addQuestion = (req, res, next) => {
  let data = {
    title: req.body.title,
    question: req.body.question,
    email: req.decoded.email
  }
  Notice.addQuestion(data)
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    next(err)
  })
}

exports.addAnswer = (req, res, next) => {
  let data = {
    email: req.decoded.email,
    answer: req.body.answer,
    id: req.body.id
  }
  Notice.addAnswer(data)
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    next(err)
  })
}

exports.addNotice = (req, res, next) => {
  let data = {
    email: req.decoded.email,
    title: req.body.title,
    content: req.body.content
  }
  Notice.addNotice(data)
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    next(err)
  })
}

exports.getAllNotices = (req, res, next) => {
  Notice.getAllNotices()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    next(err)
  })
}

exports.getAllQuestions = (req, res, next) => {
  Notice.getAllQuestions()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    next(err)
  })
}