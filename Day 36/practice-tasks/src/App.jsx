
import './App.css'

function App() {
   const isLoggedIn = true;
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Mango", "Orange"];
  return (
    <>
       <h2>Practice Task 1</h2>
      <p>
        Conditional rendering means showing different UI based on a condition
        (true/false).
      </p>
      <hr />
       <h2>Practice Task 2</h2>
      <p>{isLoggedIn ? "Welcome Back ✅" : "Please Login ❌"}</p>
      <hr />
      <h2>Practice Task 3</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <hr />
       <h2>Practice Task 4</h2>
      <p>
        Keys are required because React uses them to uniquely identify list
        items and update the UI efficiently.
      </p>
      <hr />
      <h2>Practice Task 5</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </>
  )
}

export default App
