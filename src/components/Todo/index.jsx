import './Todo.css'
import CampoTexto from '../CampoTexto'
import Rodape from '../Rodape'
import TaskBar from '../TaskBar'
import { useEffect, useState } from 'react'

const Todo = () => {
    const itens = JSON.parse(localStorage.getItem('itens')) || []
    const [todo, setTodo] = useState(itens)

    useEffect(() => {
        localStorage.setItem("itens", JSON.stringify(todo))
    }, [todo])

    return (
        <div className='Todo'>
            <CampoTexto newTodo={input => { setTodo(!!input.task ? [...todo, { ...input, id: Date.now() }] : todo); }} />
            <TaskBar tasks={todo} />
            <Rodape removeTasks={() => { setTodo(todo.filter(task => !task.estado)); }} quantidadeTasks={todo.length} />
        </div>
    )
}

export default Todo