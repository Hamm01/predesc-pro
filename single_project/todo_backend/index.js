const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const { createTodo, updateTodo } = require('./validation')
const app = express()
const { todo } = require('./db')
app.use(bodyParser.json())
app.use(cors())

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

app.get('/todos', async (req, res) => {
  // Getting all the Todos
  try {
    const todos = await todo.find({})
    res.json({ todos })
  } catch (err) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
})
app.put('/completed', async (req, res) => {
  // Toggle done Todo using this endpoint
  const updatedTodo = req.body
  try {
    const parsedPayload = updateTodo.safeParse(updatedTodo)
    if (!parsedPayload.success) {
      res.status(411).send({ msg: 'Wrong input sent in payload' })
    } else {
      await todo.updateOne({ _id: req.body.id }, { $set: { completed: true } })
      res.send({ msg: 'Todo marked as completed' })
    }
  } catch (err) {
    res.status(500).send({ msg: 'Internal Server Error' })
  }
})

app.listen(5000, () => {
  console.log('opened backend on port 5000')
})
