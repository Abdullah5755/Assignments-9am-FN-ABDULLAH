import './App.css'
function App() {
  const todos = ["Wake up", "Study React", "Practice Coding", "Sleep"];

  return (
    <>
      <h2>Practical Task 5</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
