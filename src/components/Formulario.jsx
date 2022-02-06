import React, { Fragment } from 'react';

const Formulario = () => {

  const [fruta, setFruta] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [lista, setLista] = React.useState([]);

  const fnGuardarDatos = (e) => {
    e.preventDefault();
    if (!fruta.trim()) {
      console.log('Fruta en blanco...')
      return
    }
    if (!descripcion.trim()) {
      console.log('Descripción en blanco...')
      return
    }

    setLista([
      ...lista,
      { fruta: fruta, descripcion: descripcion }
    ]);

    console.log('Guardando datos en el FORM...: ' + fruta + ' <--> ' + descripcion)
    console.log('Lista actual...: ', lista)

    e.target.reset();
    setFruta('');
    setDescripcion('');

  }

  return (
    <Fragment>
      <hr />
      <h2 className='text-success'>Formulario</h2>
      {/* FORM para la captura de daos en ARRAY */}
      <form onSubmit={fnGuardarDatos}>
        <input
          type="text"
          name=""
          id=""
          className='form-control mb-2'
          placeholder='Ingrese fruta'
          onChange={e => setFruta(e.target.value)} />
        <input
          type="text"
          name=""
          id=""
          className='form-control mb-2'
          placeholder='Ingrese descripción'
          onChange={e => setDescripcion(e.target.value)} />
        <button className="btn btn-primary btn-block w-100" type='submit'>Agregar</button>
      </form>
      {/* UL para mostrar el ARRAY con lo que lleva */}
      <ul className='mt-2 ms-5 me-5 border'> {
        lista.map((item, index) => (
          <li key={index}>{item.fruta} - {item.descripcion}</li>
        ))
      }
      </ul>
    </Fragment>
  )
};

export default Formulario;
