const { Router } = require('express')

const router = Router()

router.post('/signup', (req, res) => {
  // Signup Route
})

router.post('/signin', (req, res) => {
  // Admin login route
})

router.post('/courses', (req, res) => {
  // Route for creating new Course
})

router.get('/courses', (req, res) => {
  // Route for getting the course list
})

module.exports = router
