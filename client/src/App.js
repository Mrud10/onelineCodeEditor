import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("Error fetching message:", err);
        setMessage("Could not connect to backend");
      });
  }, []);

  return (
    <div className="App">
      <h1>React + Node Test</h1>
      <p>Message from backend:</p>
      <strong>{message}</strong>
    </div>
  );
}

export default App;
