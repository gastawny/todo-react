import './TaskBar.css'
import Task from '../Task'

const TaskBar = ({ tasks }) => {
    return (
        <div className='TaskBar'>
            {tasks.map(task => <Task
                trocarEstado={() => task.estado = !task.estado}
                key={task.id}
                id={task.id}
            >{task.task}</Task>)}
        </div>
    )
}

export default TaskBar