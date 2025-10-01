import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const sayHello = async () => {
    const res = await fetch(`http://127.0.0.1:3030/hello/${name}`);
    const text = await res.text();
    setResponse(text);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Zama dApp</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={sayHello}>Send</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
