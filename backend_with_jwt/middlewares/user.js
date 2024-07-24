const { User } = require('../db')
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWT_SECRET

async function userMiddleware(req, res, next) {
  const token = req.headers.authorization
  const JwtToken = token.split(' ')[1]
  const decodedValue = jwt.verify(JwtToken, JWTSECRET)
  // Below we are checking the username and role is user. means authoization check
  if (decodedValue.username && decodedValue.role === 'user') {
    req.headers.username = decodedValue.username
    next()
  } else {
    res.status(411).json({ msg: 'User Authentication Failed' })
  }
}

module.exports = userMiddleware
