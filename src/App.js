import React from "react";
import './App.css';
import Cabecera from "./componentes/index Componeneteas/Cabecera";
import Carrucel from "./componentes/index Componeneteas/Carrusel";
function App() {
  return (
    <div className="App">
      <Cabecera/>
      <Carrucel className="carrucel"/>
    </div>
  );
}

export default App