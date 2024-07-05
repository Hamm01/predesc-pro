const { Router } = require('express')
const dotenv = require('dotenv').config()
const userMiddleware = require('../middlewares/user')
const { User, Course } = require('../db')
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWT_SECRET
const router = Router()

router.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username != '' && password != '') {
    try {
      const userExist = await User.findOne({ username })
      if (userExist) {
        res.status(409).json({ msg: 'User Already exists' })
        return
      }
      await User.create({ username, password })
      res.json({ msg: 'User created succesfuly' })
    } catch (error) {
      res.status(500).json({ msg: 'Internal Server Error' })
    }
  } else {
    res
      .status(400)
      .json({ msg: 'Bad Request username and password cannot be empty' })
  }
})
router.post('/signin', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  try {
    const userExists = await User.findOne({ username, password })
    if (userExists) {
      const token = jwt.sign({ username, role: 'user' }, JWTSECRET)
      res.json({ token })
    } else {
      res.status(411).json({ msg: 'Username and password are wrong' })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Internal server Error', error: err })
  }
})

router.get('/courses', async (req, res) => {})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {})

module.exports = router
