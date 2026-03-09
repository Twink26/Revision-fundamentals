import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    setTask(e.target.value)
  }

  function addTodo() {
    if (task.trim() === "") return
    setTodos([...todos, { id: Date.now(), text: task }])
    setTask("")
  }

  return (
    <>
      <h1>Todo list</h1>

      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task..."
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}

export default App