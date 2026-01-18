import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <h2>Practical Task 4</h2>

      <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
      <h3>Likes: {likes}</h3>
    </>
  );
}

export default App;
