import './Rodape.css'

const Rodape = ({ quantidadeTasks, removeTasks }) => {
    return (
        !!quantidadeTasks &&
        <div className='Rodape'>
            <h1 className='texto-quantidade'>{quantidadeTasks} Itens</h1>
            <button onClick={removeTasks} className='clear'>Clear Complete</button>
        </div>
    )
}

export default Rodape