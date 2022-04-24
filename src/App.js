// import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const { advice } = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []); 

  return (
    <div className="app-container">
      <div className="header">
        Advice Generator
      </div>
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <div className="button-container">
            <button className="btn btn-primary" onClick={()=>fetchAdvice()}>
              Generate Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;