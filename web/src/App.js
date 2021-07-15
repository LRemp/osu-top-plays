import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ScoresList from './components/ScoresList';

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
      <Header />
      <ScoresList />
      <p><code>Result status: {response}</code></p>
      <button onClick={ping}>POST</button>
    </div>
  );
}

export default App;
