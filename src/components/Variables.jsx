import React from 'react';

import myDocumentPhoto01 from '../assets/img/myDocumentPhoto01.jpg'

const myName = 'Hildebrando Sierra V.'
const Variables = () => {
   return (
      <>
         <hr />
         <p>Nombre: {myName}</p>
         <img src={myDocumentPhoto01} width={50} height={50} alt="myPhoto" />
      </>
   );
};

export default Variables;
