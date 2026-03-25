import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(""); // Track typing
  const [username, setUsername] = useState("");     // Trigger fetch
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    let isIgnore = false; // Prevents race conditions
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then(data => {
        if (!isIgnore) {
          setUserData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!isIgnore) {
          setError(err.message);
          setUserData(null);
          setLoading(false);
        }
      });

    return () => { isIgnore = true; }; // Cleanup function
  }, [username]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Github Profile Viewer</h1>
      <input
        type="text"
        placeholder="Enter Github username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setUsername(inputValue);
        }}
      />
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && !loading && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="avatar" width="100" style={{ borderRadius: '50%' }}/>
          <h2>{userData.name || userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;