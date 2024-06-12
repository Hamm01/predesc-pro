const { Router } = require('express')

const router = Router()

router.post('/signup', (req, res) => {
  // User Signup Route
})
router.post('/signin', (req, res) => {
  // User Login Route
})

router.post('/courses/:courseId', (req, res) => {
  // Implementing the Course puchase Feature
})

router.post('/purchasedCourses', (req, res) => {
  // To Fetch the purchased courses
})

module.exports = router
