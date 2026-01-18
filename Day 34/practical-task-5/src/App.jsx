
import './App.css'
function DashboardCard({ title, value }) {
  return (
    <div style={{ border: "1px solid black", padding: "15px", width: "200px" }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h2>Practical Task 5</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <DashboardCard title="Users" value="120" />
        <DashboardCard title="Orders" value="45" />
        <DashboardCard title="Revenue" value="₹50,000" />
      </div>
    </>
  );
}

export default App;
