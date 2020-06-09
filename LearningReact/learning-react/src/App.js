import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MyComponent from './components/MyComponent';
import Peliculas from './components/Peliculas';

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
        <h2> {helloWord(name, 22)} </h2>
        <section className="components">
          <MyComponent/>
          <Peliculas/>
        </section>

      </header>


    </div>
  );
}

export default App;
