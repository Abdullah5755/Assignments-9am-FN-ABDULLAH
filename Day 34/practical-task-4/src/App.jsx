
import './App.css'
function BlogTitle({ title }) {
  return <h3>{title}</h3>;
}

function BlogContent({ content }) {
  return <p>{content}</p>;
}

function BlogPost() {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "400px" }}>
      <BlogTitle title="My First Blog" />
      <BlogContent content="This is a blog layout using nested components." />
    </div>
  );
}

function App() {
  return (
    <>
      <h2>Practical Task 4</h2>
      <BlogPost />
    </>
  );
}

export default App;
