const Admin = require('../db')

async function adminMiddleware(req, res, next) {
  const username = req.headers.username
  const password = req.headers.password
  try {
    const admin = await Admin.findOne({ username, password })
    if (admin) {
      next()
    } else {
      res.status(403).json({ msg: 'User not exists' })
    }
  } catch (error) {
    res
      .status(500)
      .send('Internal Server Error: An error occurred on the server')
  }
}

module.exports = adminMiddleware
