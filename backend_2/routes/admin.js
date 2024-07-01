const { Router } = require('express')
const adminMiddleware = require('../middlewares/admin')
const { Admin, Course } = require('../db')
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

router.post('/signin', async (req, res) => {})

router.post('/courses', adminMiddleware, async (req, res) => {})

router.get('/courses', adminMiddleware, async (req, res) => {})

module.exports = router
