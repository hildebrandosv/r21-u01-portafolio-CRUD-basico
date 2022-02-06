import React, { Fragment } from 'react';

const Eventos = () => {

   const eventoClick = () => {
      console.log('Diste CLICK en manejo EVENTOS')
   }

   return (
      <>
         <hr />
         <button onClick={() => eventoClick()}>Mi Evento Click</button>
      </>
   );
};

export default Eventos;
