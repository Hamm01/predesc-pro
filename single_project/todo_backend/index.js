const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/todo', (req, res) => {
  // Creating the new Todo
})

app.post('/todos', (req, res) => {
  // Getting all the Todos
})
app.put('/completed', (req, res) => {
  // Toggle done Todo using this endpoint
})

app.listen(5000, () => {
  console.log('opened backend on port 5000')
})
