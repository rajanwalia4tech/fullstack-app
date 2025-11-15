import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const callApi = () => {
    setLoading(true);
    fetch("http://localhost:5001/api/hello")
      .then(res => res.json())
      .then(d => {
        setData(JSON.stringify(d));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setData("Error fetching API");
        setLoading(false);
      });
  };
  console.log("Button clicked");
  return (
    <div style={{ fontSize: "20px", padding: "20px" }}>
      <h1>Frontend → Backend Test</h1>

      <button
        onClick={callApi}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Call Backend API
      </button>

      <p style={{ marginTop: "20px", color : "blue"}}>
        {loading ? "Loading..." : `Response: ${data}`}
      </p>
    </div>
  );
}

export default App;
