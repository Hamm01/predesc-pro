const express = require('express')
var bodyParser = require('body-parser')
const { createTodo, updateTodo } = require('./validation')
const app = express()
app.use(bodyParser.json())

app.post('/todo', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const parsedPayload = createTodo.safeParse({ title, description })

  if (!parsedPayload.success) {
    res.status(411).send({ msg: 'Wrong inputs sent in payload' })
  }
  // Creating the new Todo
})

app.post('/todos', (req, res) => {
  // Getting all the Todos
})
app.put('/completed', (req, res) => {
  // Toggle done Todo using this endpoint
  const updatedTodo = req.body
  const parsedPayload = updateTodo.safeParse(updatedTodo)
  if (!parsedPayload.success) {
    res.status(411).send({ msg: 'Wrong input sent in payload' })
  }
})

app.listen(5000, () => {
  console.log('opened backend on port 5000')
})
