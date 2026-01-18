
import './App.css'

function App() {
  const products = ["Mobile", "Laptop", "Tablet", "Headphones"];

  return (
    <>
      <h2>Practical Task 2</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
