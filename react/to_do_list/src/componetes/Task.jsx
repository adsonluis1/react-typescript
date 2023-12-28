function Task ({task, funck, marcar}){
    return (
        <div className="linha">
        <p onClick={()=>{
            marcar()
        }} style={{textDecoration: task.done ? 'line-through' : ''}}>{task.text}</p>
        <button onClick={(evt)=>{
           funck()
        }}>apagar</button>
        
        </div>
    )
}

export default Task