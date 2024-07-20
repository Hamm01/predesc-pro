import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'
import todoFetchRequest from './db/todo'
function App() {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await todoFetchRequest()

      setTodos(response)
    }
    fetchData()
  }, [])

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </>
  )
}

export default App
