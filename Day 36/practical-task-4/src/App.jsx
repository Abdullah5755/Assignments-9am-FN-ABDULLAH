import './App.css'
function App() {
  const users = [
    { id: 101, name: "Abdullah" },
    { id: 102, name: "Ameen" },
    { id: 103, name: "Sara" },
  ];

  return (
    <>
      <h2>Practical Task 4</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
