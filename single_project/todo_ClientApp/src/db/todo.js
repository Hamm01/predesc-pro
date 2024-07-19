import axios from 'axios'
export default async function todoFetchRequest() {
  const fetchTodos = await axios.get('http://localhost:5000/todos')

  return fetchTodos.data.todos
}
