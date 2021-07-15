const jwt = require("jsonwebtoken")

function generateToken(payload) {
  return jwt.sign(payload, "tesdummytoken")
}

module.exports = { generateToken }