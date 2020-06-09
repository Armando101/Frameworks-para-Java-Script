import React from 'react';
import logo from './logo.svg';
import './App.css';

function helloWord(name, age) {
  const introduce = (
    <div>
      <h2>Hi, my name is {name}</h2>
      <h3>I'm {age} years old </h3>
      <h4>I'm Frontend Developer</h4>
    </div>
  );

  return introduce;
}

function App() {
  const name = 'Armando';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> {helloWord(name, 22)} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
