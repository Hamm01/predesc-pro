const { Router } = require('express')
const userMiddleware = require('../middlewares/user')
const { User } = require('../db')
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
router.post('/signin', userMiddleware, (req, res) => {
  // User Login Route
})

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  // Implementing the Course puchase Feature
})

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // To Fetch the purchased courses
})

module.exports = router
