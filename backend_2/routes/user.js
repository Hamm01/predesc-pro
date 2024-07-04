const { Router } = require('express')
const userMiddleware = require('../middlewares/user')
const { User, Course } = require('../db')
const jwt = require('jsonwebtoken')

const router = Router()

router.post('/signup', async (req, res) => {})
router.get('/signin', async (req, res) => {})

router.get('/courses', async (req, res) => {})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {})

module.exports = router
