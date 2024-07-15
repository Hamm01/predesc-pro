const express = require('express')
var bodyParser = require('body-parser')
const { createTodo, updateTodo } = require('./validation')
const app = express()
app.use(bodyParser.json())

app.post('/todo', async (req, res) => {
  // Creating the new Todo
  const title = req.body.title
  const description = req.body.description
  try {
    const parsedPayload = createTodo.safeParse({ title, description })

    if (!parsedPayload.success) {
      res.status(411).send({ msg: 'Wrong inputs sent in payload' })
    } else {
      await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
      })
      res.send({ msg: 'Added Todo Succesfully' })
    }
  } catch (err) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
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
