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
      const token = jwt.sign({ username, role: 'admin' }, JWTSECRET)
      res.json({ token })
    } else {
      res.status(411).json({ msg: 'Invalid user details' })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' })
  }
})

router.post('/courses', adminMiddleware, async (req, res) => {
  // To create a New course
  const title = req.body.title
  const description = req.body.description
  const imageLink = req.body.imageLink
  const price = req.body.price
  try {
    const course = await Course.create({ title, description, imageLink, price })
    res.json({ msg: 'Course Created Succesfully', courseId: course._id })
  } catch (err) {
    res.status(500).json({ msg: 'Internal some error occured', err })
  }
})

router.get('/courses', adminMiddleware, async (req, res) => {
  // For getting all the courses
  try {
    const courses = await Course.find({})
    res.json({ courses: courses })
  } catch (err) {
    res.status(500).json({ msg: 'Internal error' })
  }
})

module.exports = router
