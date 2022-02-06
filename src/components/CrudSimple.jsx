import React from 'react';
import { nanoid } from 'nanoid';

const CrudSimple = () => {

  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState('')
  const [mensajeError, setMensajeError] = React.useState(null)
  

  const fnAgregarTarea = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      // console.log('Debe entrar una tarea...');
      setMensajeError('Entre una tarea.')
      return
    }
    setTareas([
      ...tareas,
      { id: nanoid(), tarea: tarea }
    ])
    setTarea('');
    setMensajeError(null)
    // console.log('Tarea leida: ', tarea);
  }

  const fnEliminarTarea = id => {
    // console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id);
    setTareas(arrayFiltrado);
  }

  const fnBtnEditarTarea = item => {
    // console.log(id)
    setModoEdicion(true)
    setTarea(item.tarea)
    setId(item.id)
  }

  const fnEditarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      // console.log('Debe entrar una tarea...');
      setMensajeError('Entre una tarea.')
      return
    }
    const arrayEditado = tareas.map(item => (item.id === id ? { id, tarea } : item))
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId(' ')
    setMensajeError(null)

  }

  return (
    <div className='container rounded-3 border-2 m-t3 mb-5'>
      <h2 className="text-center text-light bg-dark py-2 opacity-75 mb-3">
        <span className="text-info fw-bold">TAREAS</span>
        <span className='text-danger'> | </span>
        C.R.U.D. Simple
      </h2>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.length === 0
                ? (
                  <li className="list-group-item">No Hay tareas</li>
                )
                : (
                  tareas.map(item => (
                    <li className="list-group-item" key={item.id}>
                      <span className="lead">{item.tarea}</span>
                      <button
                        className="btn btn-danger opacity-75 btn-sm float-end mx-2"
                        onClick={() => fnEliminarTarea(item.id)}
                      >Eliminar
                      </button>
                      <button
                        className="btn btn-warning opacity-75 btn-sm float-end"
                        onClick={() => fnBtnEditarTarea(item)}
                      >Editar
                      </button>
                    </li>
                  ))
                )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
            }
          </h4>
          <form onSubmit={modoEdicion ? fnEditarTarea : fnAgregarTarea}>
            {
              mensajeError 
              ? <p className='text-danger text-center m7-2 fs-5'>{mensajeError}</p>  
              : null
            }
            <input
              type="text"
              className="form-control mb-2"
              placeholder='Ingrese la Tarea'
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            {
              modoEdicion
                ? (
                  <button className="btn btn-warning btn-block w-100 opacity-75" type='submit'>Editar</button>
                )
                : (
                  <button className="btn btn-success btn-block w-100 opacity-75" type='submit'>Agregar</button>
                )
            }
          </form>
        </div>
      </div>
    </div>
  )
};

export default CrudSimple;

