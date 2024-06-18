const { User } = require('../db')

async function userMiddleware(req, res, next) {
  const username = req.headers.username
  const password = req.headers.password
  try {
    const UserExist = await User.findOne({ username, password })
    if (UserExist) {
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

module.exports = userMiddleware
