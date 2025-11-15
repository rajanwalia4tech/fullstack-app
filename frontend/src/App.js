import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/hello")
      .then(res => res.json())
      .then(d => setData(JSON.stringify(d)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ fontSize: "20px", padding: "20px" }}>
      <h1>Frontend → Backend Test</h1>
      <p>Response: {data}</p>
    </div>
  );
}

export default App;
