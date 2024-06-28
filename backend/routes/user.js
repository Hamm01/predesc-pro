const { Router } = require('express')
const userMiddleware = require('../middlewares/user')
const { User, Course } = require('../db')
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
router.get('/courses', async (req, res) => {
  // This will be an open endpoint for all users to see the courses on website
  try {
    const courses = await Course.find({})
    res.json(courses)
  } catch (err) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  const courseId = req.params.courseId
  const username = req.headers.username
  // Adding the Course id into the purchasedCourses array of user
  try {
    const courseAvailable = await Course.findOne({ _id: courseId })
    if (courseAvailable) {
      // pushing the course into user
      const check = await User.updateOne(
        { username },
        {
          $push: {
            purchasedCourses: courseId
          }
        }
      )

      res.json({ msg: 'Course Successfully added' })
    }
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const username = req.headers.username
  try {
    const user = await User.findOne({ username })
    const purchasedCourses = await Course.find({
      _id: {
        $in: user.purchasedCourses
      }
    })
    res.json({ PurchasedCourses: purchasedCourses })
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
})

module.exports = router
