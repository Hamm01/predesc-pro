import React, { useState } from 'react'
import { todoCreateRequest } from '../db/todo'
export default function CreateTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  async function createTodo() {
    const response = await todoCreateRequest({ title, description })
    if (response.statusText == 'OK') {
      alert('Added the Todo in database')
    } else {
      throw Error
    }
  }
  return (
    <div className="container">
      <div className="inputBox">
        <input
          type="text"
          className="inputs"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="inputs"
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button className="submit-btn" onClick={createTodo}>
          Add Todo
        </button>
      </div>
    </div>
  )
}
