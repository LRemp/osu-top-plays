import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ScoresList from './components/ScoresList';

function App() {

  return (
    <div className="App">
      <Header />
      <ScoresList />
    </div>
  );
}

export default App;
