import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Practice Task 2</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App;

