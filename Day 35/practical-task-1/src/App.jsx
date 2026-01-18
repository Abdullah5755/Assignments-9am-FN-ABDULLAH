import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Practical Task 1</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
