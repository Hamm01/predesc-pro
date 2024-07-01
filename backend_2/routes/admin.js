const { Router } = require('express')
const adminMiddleware = require('../middlewares/admin')
const { Admin, Course } = require('../db')
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWT_SECRET
const router = Router()

router.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username != '' && password != '') {
    try {
      const adminExist = await Admin.findOne({ username })
      if (adminExist) {
        res.status(409).json({ msg: 'Admin Already exists' })
        return
      }
      await Admin.create({ username, password })
      res.json({ msg: 'Admin Created Succesfully' })
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
    const adminExist = await Admin.findOne({ username, password })
    if (adminExist) {
      const token = jwt.sign({ username }, JWTSECRET)
      res.json({ token })
    } else {
      res.status(411).json({ msg: 'Invalid user details' })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' })
  }
})

router.post('/courses', adminMiddleware, async (req, res) => {})

router.get('/courses', adminMiddleware, async (req, res) => {})

module.exports = router
