import React from 'react'

export default function Todo({ todos }) {
  return (
    <div className="todos-container">
      <h2>Todo List</h2>
      {todos.map(todo => (
        <div className="singleTodo" key={todo.title}>
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
            />
            <h3>{todo.completed ? 'Completed' : 'Mark to Complete'}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
