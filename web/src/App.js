import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, updateResponse] = useState("none");

  const ping = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };

    fetch('/ping', requestOptions)
      .then(data => data.json())
      .then(res => updateResponse(res.message));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p><code>Result status: {response}</code></p>
        <button onClick={ping}>POST</button>
      </header>
    </div>
  );
}

export default App;
