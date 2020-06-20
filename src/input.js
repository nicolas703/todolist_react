import React, {useState} from 'react'
import Notarea from './tareas'

const enviarTarea = (e, tarea, setTarea, input, setInput)=>{
    e.preventDefault()
    const id = (tarea.length) ? tarea[tarea.length - 1].id + 1 : 1
    
    setTarea([...tarea, {id: id, nota: input}])
    setInput('')
}

const deleteTarea=(id, tarea, setTarea)=>{
    setTarea(tarea.filter(note => note.id !== id))
}

export default ()=>{
    const [tarea, setTarea] = useState([])
    const [input, setInput] = useState('')
    return(
    <>
        <h1 className="titulo">To Do List</h1>
        <div className="libreta">
            <div className="dib">
                <form onSubmit={(e)=> enviarTarea(e, tarea, setTarea, input, setInput)}>
                    <input placeholder="Añade una tarea" className="nota" onChange={(e) => setInput(e.target.value)} value={input}/>
                    <button className="agg">+</button>
                    
                </form>
                {tarea.map(note =>(
                    <Notarea nota={note.nota} id={note.id} deleteTarea={(id)=> deleteTarea(id, tarea, setTarea)} />
                ))}
            </div>
        </div>
    </>
    )

}