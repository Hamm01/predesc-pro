import axios from 'axios'
export async function todoFetchRequest() {
  const fetchTodos = await axios.get('http://localhost:5000/todos')

  return fetchTodos.data.todos
}

export async function todoCreateRequest(data) {
  const response = await axios.post('http://localhost:5000/todo', data)
  return response
}

export async function todoUpdateRequest(data) {
  const response = await axios.put('http://localhost:5000/completed', data)
  return response.data
}
