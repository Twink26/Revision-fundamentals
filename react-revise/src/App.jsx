import { useState } from "react"

const items = [
  "React Basics",
  "Advanced React",
  "JavaScript Mastery",
  "Node.js Guide",
  "CSS Flexbox",
  "React Hooks",
  "MongoDB Intro"
]

function App() {
  const [search, setSearch] = useState("")

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App