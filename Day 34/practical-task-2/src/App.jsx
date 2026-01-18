
import './App.css'
function Product({ name, price }) {
  return (
    <li>
      {name} - ₹{price}
    </li>
  );
}

function App() {
  return (
    <>
      <h2>Practical Task 2</h2>
      <ul>
        <Product name="Mobile" price={15000} />
        <Product name="Laptop" price={50000} />
        <Product name="Headphones" price={2000} />
      </ul>
    </>
  );
}

export default App;
