import './Task.css'

const Task = ({ children, id, trocarEstado }) => {
    const alterarEstado = () => {
        const nameTask = document.querySelector(`.id${id}`)
        nameTask.classList.toggle('active')
        trocarEstado()
    }
    return (
        <div className='Task'>
            <div className='task'>
                <input
                    onChange={alterarEstado}
                    type='checkbox'
                    className='check'
                    name='check'
                />
                <h1 className={`nameTask id${id}`}>{children}</h1>
            </div>
            <div className='linha-horizontal'></div>
        </div>
    )
}

export default Task