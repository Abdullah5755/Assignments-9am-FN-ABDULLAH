import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>Practice Task 5</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>

      {show && <h3>Hello This is visible text</h3>}
    </>
  );
}

export default App;
