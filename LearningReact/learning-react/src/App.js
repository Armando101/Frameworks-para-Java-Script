import React from 'react';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {
  
  const buttonString = "Ir al blog";

  return (
    <div className="App">
      <Header/>
      <Slider
        title="Bienvenido a mi sitio web con React"
        btn = {buttonString}
      />

        <div className="center">
          
          <SeccionPruebas/>
          <Sidebar/>

        </div>
        <div className="clearfix"></div>
      <Footer/>
    </div>
  );
}

export default App;
