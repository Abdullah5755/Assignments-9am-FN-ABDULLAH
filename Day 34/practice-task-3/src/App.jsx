
import './App.css'
function Age({ age }) {
  return <h3>Age: {age}</h3>;
}

function App() {
  return (
    <>
      <h2>Practice task 3</h2>
      <Age age={22} />
    </>
  );
}
export default App;

