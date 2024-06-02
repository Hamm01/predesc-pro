const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const { Admin } = require('../db')

async function adminMiddleware(req, res, next) {
  const token = req.headers.authorization
  const jwtToken = token.split(' ')[1]
  const d̥ecodedtoken = jwt.verify(jwtToken, jwtSecret)

  if (d̥ecodedtoken.username && d̥ecodedtoken.role === 'admin') {
    req.headers.username = d̥ecodedtoken.username
    next()
  } else {
    res.status(403).json({ msg: 'User Authentication Failed' })
  }
}

module.exports = adminMiddleware
