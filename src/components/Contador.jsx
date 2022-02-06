import React, { Fragment } from 'react';

const Contador = () => {

   // Uso de ESTADOS directamente desde REACT, o sea que no se importa como "useState".
   const [contador, setContador] = React.useState(0);

   const fnAumentar = () => {
      console.log('Diste CLICK en manejo EVENTOS | ESTADOS | Funcion fnContador()')
      setContador(contador + 1)
   }

   return (
      <Fragment>
         <hr />
         <h3>Contador | Con uso de ESTADOS </h3>
         <h4>El contador es: {contador}</h4>
         <button onClick={() => fnAumentar()}>Aumentar con Función</button>
         {/* Si se quiere menos código, se quita la función y se llama el ESTADO directamente en el botón como se muestra en la siguiente línea */}
         <br />
         <button onClick={() => setContador(contador + 1)}>Aumentar Directo (sin Fn)</button>
      </Fragment>
   )
};

export default Contador;
