import React from 'react'
import { todoUpdateRequest, todoFetchRequest } from '../db/todo'
export default function Todo({ todos, setTodos }) {
  async function triggerUpdateTodo(checked, id) {
    try {
      // updating the todo completed in backend
      const updateResponse = await todoUpdateRequest({
        id: id,
        completed: checked
      })
      // After updating getting all the todos from the backend
      const updatedTodos = await todoFetchRequest()
      setTodos(updatedTodos)
      console.log(updateResponse.data)
    } catch (err) {
      console.error('Error in updating or fetching the todos')
    }
  }

  return (
    <div className="todos-container">
      <h2>Todo List</h2>
      {todos.map(todo => (
        <div className="singleTodo" key={todo._id}>
          <div className="title-desc">
            <p className="title">{todo.title}</p>
            <p className="desc"> {todo.description}</p>
          </div>
          <div className="input-checkText">
            <input
              type="checkbox"
              name="completed"
              id="markAsdone"
              defaultChecked={todo.completed}
              onChange={e => triggerUpdateTodo(e.target.checked, todo._id)}
            />
            <h3>{todo.completed ? 'Completed' : 'Mark to Complete'}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
