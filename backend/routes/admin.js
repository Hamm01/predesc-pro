const { Router } = require('express')
const adminMiddleware = require('../middlewares/admin')
const router = Router()

router.post('/signup', (req, res) => {
  // Signup Route
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
