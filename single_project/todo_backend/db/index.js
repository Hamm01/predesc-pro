const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const { boolean } = require('zod')

mongoose.connect(process.env.MONGODB_URI)

const todoSchmea = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchmea)

module.exports = {
  todo
}
