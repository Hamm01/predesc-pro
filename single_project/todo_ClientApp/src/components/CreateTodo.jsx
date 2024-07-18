import React from 'react'

export default function CreateTodo() {
  return (
    <div className="container">
      <div className="inputBox">
        <input type="text" className="inputs" placeholder="Title" /> <br />
        <input type="text" className="inputs" placeholder="Description" />
        <br />
        <button className="submit-btn">Add Todo</button>
      </div>
    </div>
  )
}
