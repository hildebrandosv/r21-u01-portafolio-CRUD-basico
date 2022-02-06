import React, { Fragment, useState } from 'react';

const Listas = () => {

   const estadoInicial = [1, 2, 3, 4, 5, 6]
   const [lista, setLista] = useState(estadoInicial);

   const fnLimpiarLista = () => {
      setLista([]);
      console.log('Limpié la lista...');
   }

   return (
      <Fragment>
         <hr />
         <h2>Listas | ESTADOS | Array de Números</h2>
         <span>Array es: </span>
         {
            lista.map((item, index) => (
               <span key={index}>{item}, </span>
            ))
         }
         <br />
         <button onClick={()=> fnLimpiarLista()} className='btn-success'>Limpiar lista</button>
      </Fragment>
   )
};

export default Listas;
