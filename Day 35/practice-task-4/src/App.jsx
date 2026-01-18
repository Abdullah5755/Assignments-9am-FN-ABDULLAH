import { useState } from 'react'
import './App.css'


function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h2>Practice Task 4</h2>

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>You typed: {text}</h3>
    </>
  );
}

export default App;

