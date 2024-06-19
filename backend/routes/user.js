const { Router } = require('express')
const userMiddleware = require('../middlewares/user')
const router = Router()

router.post('/signup', (req, res) => {
  // User Signup Route
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
