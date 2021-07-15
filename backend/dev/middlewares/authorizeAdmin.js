const User = require('../models/user')

const authorizeAdmin = function (req, res, next) {
  let { role } = req.decoded
  try {
    if(role !== 'admin') throw { name: 'customError', status: 401, msg: 'Not Authorized' }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authorizeAdmin