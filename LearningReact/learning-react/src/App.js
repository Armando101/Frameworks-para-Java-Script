import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MyComponent from './components/MyComponent';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';


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
      <Header/>
      <Slider/>

        <div className="center">
          <section id="content">
            <MyComponent/>
            <Peliculas/>
          </section>
          
          <Sidebar/>
        </div>

    </div>
  );
}

export default App;
