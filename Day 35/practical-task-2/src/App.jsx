import { useState } from 'react'

import './App.css'


function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h2>Practical Task 2</h2>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

      <h3>{isOn ? "💡 Light is ON" : "🌙 Light is OFF"}</h3>
    </>
  );
}

export default App;

