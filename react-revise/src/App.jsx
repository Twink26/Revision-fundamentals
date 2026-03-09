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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "24px 28px",
          borderRadius: "16px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "16px",
            fontSize: "24px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Todo List
        </h1>

        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task..."
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            marginBottom: "12px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#4f46e5",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "16px",
          }}
        >
          Add
        </button>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                padding: "8px 10px",
                borderRadius: "8px",
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                marginBottom: "8px",
              }}
            >
              {todo.text}
            </li>
          ))}
          {todos.length === 0 && (
            <li style={{ color: "#9ca3af", textAlign: "center" }}>
              No tasks yet. Add one above.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App