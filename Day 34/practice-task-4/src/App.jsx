
import './App.css'
import "./App.css";

function Box({ children, color }) {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <h2>Practice task 4</h2>

      <p>Props example: color="red"</p>
      <p>Children example: hello</p>

      <Box color="red">hello</Box>
    </>
  );
}

export default App;
