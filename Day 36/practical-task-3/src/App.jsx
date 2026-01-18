
import './App.css'
function App() {
  const data = [];

  return (
    <>
      <h2>Practical Task 3</h2>

      {data.length === 0 ? <p>No Data Available ❌</p> : <p>Data Found ✅</p>}
    </>
  );
}

export default App;
