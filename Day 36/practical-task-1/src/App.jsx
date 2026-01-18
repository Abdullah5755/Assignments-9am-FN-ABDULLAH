import { useState } from 'react'

import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2>Practical Task 1</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <p>{isLoggedIn ? "Welcome User ✅" : "Please Login ❌"}</p>
    </>
  );
}

export default App;
