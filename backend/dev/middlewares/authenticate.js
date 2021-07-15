const jwt = require("jsonwebtoken")
const User = require('../models/user')

const authenticate = function (req, res, next) {

    const token = req.headers.token
    let decoded = null
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      next({name: 'customError', status: 401, msg: 'Invalid Token'})
    }
    if(decoded) {
      User.findUser( decoded.email)
      .then(data => {
        if (!data.data) {
          throw {
            name: "customError",
            msg: `Invalid Token`,
            status: 401
          }
        }
        req.decoded = decoded
        next()
      })
      .catch(err => {
        next(err)
      })
    }

}

module.exports = authenticate