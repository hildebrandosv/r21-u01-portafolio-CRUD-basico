import React, { Fragment, useState } from 'react';

const Estados = () => {

   const [textoPrueba, setTextoPrueba]= useState('Texto INICIAL para manejo de ESTADOS');

   const eventoClick = () => {
      console.log('Diste CLICK en manejo EVENTOS | ESTADOS')
      setTextoPrueba('Texto "NUEVO" para manejo de ESTADOS')
   }

   return (
      <>
         <hr />
         <button onClick={() => eventoClick()}>Mi Evento Click | Con Estado</button>
         <h3>{textoPrueba}</h3>
      </>
   );
};

export default Estados;
