import { useState } from "react"

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }

  function clearText() {
    setText("")
  }

  return (
    <>
      <h1>Live Text Preview</h1>

      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p>You typed: {text}</p>

      <button onClick={clearText}>Clear</button>
    </>
  )
}

export default App