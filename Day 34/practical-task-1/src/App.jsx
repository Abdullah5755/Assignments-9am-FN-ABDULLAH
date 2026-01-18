import './App.css'

function ProfileCard({ name, role }) {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "260px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h2>Practical Task 1</h2>
      <ProfileCard name="Abdullah" role="Frontend developer" />
    </>
  );
}

export default App;
