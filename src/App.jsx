import React from "react";

import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";
import Eventos from "./components/Eventos";
import Estados from "./components/Estados";
import Contador from "./components/Contador";
import Listas from "./components/Listas";
import Formulario from "./components/Formulario";
import CrudSimple from "./components/CrudSimple";

function App() {
  return (
    <div className="container mt-5 ms-5">
      <h1 className="text-danger display-4 fw-bold">Portafolio HS</h1>
      <CrudSimple/>
      <Formulario/>
      <Parrafo/>
      <Variables/>
      <Eventos/>
      <Estados/>
      <Contador/>
      <Listas/>
    </div>
  );
}

export default App;
