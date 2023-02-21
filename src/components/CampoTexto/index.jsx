import './CampoTexto.css'
import { BsArrow90DegDown } from 'react-icons/bs'

const CampoTexto = ({ newTodo }) => {
    let valueTask
    const enviarValueTask = () => {
        newTodo({ task: valueTask, estado: false })
        document.querySelector('.inputTask').value = ''
    }
    const enter = e => {
        if (e.key === 'Enter')
            enviarValueTask()
    }
    return (
        <div className='CampoTexto'>
            <input
                className='inputTask'
                type="text"
                onChange={e => { valueTask = e.target.value }}
                onKeyDown={enter}
                placeholder='Create a new todo...'
            />
            <button className='button' onClick={() => enviarValueTask()}>
                <BsArrow90DegDown size='1.6rem' className='BsArrow90DegDown' />
            </button>
        </div>
    )
}

export default CampoTexto