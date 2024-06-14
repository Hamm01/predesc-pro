const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const AdminSchema = new mongoose.Schema({})

const UserSchema = new mongoose.Schema({})

const CourseSchema = new mongoose.Schema({})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('Admin', UserSchema)
const Course = mongoose.model('Admin', CourseSchema)

module.exports = {
  Admin,
  User,
  Course
}
