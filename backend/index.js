const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.EXPRESS_PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
