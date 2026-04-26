import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/message`);
    const data = await res.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Full Stack Demo</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;