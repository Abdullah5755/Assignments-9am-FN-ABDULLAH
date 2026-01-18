
import './App.css'
function App() {
  const handleClick = () => {
    alert("Button clicked ✅");
  };

  return (
    <>
      <h2>Practice Task 3</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
