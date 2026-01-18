import { useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", padding: "30px" }}>
      <h2>Practical Task 5</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("white")}>Reset</button>
    </div>
  );
}

export default App;
