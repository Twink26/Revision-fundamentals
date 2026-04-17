import { useState, useEffect } from "react"

function App() {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [results, setResults] = useState([])


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    if (debouncedQuery === "") return

    fetch(`https://api.github.com/search/users?q=${debouncedQuery}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.items || [])
      })
  }, [debouncedQuery])

  return (
    <>
      <h1>Debounced Search</h1>

      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {results.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  )
}

export default App