
import './App.css'
function Card({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "15px", width: "320px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <h2>Practical task 3</h2>

      <Card>
        <h3>Welcome </h3>
        <p>This is inside Card using children.</p>
      </Card>
    </>
  );
}

export default App;
