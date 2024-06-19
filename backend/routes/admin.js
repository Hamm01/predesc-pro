const { Router } = require('express')
const adminMiddleware = require('../middlewares/admin')
const { Admin } = require('../db')
const router = Router()

router.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

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
})

router.post('/signin', adminMiddleware, (req, res) => {
  // Admin login route
})

router.post('/courses', adminMiddleware, (req, res) => {
  // Route for creating new Course
})

router.get('/courses', adminMiddleware, (req, res) => {
  // Route for getting the course list
})

module.exports = router
