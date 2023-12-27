function Task ({task}){
    return (
        <div id="lista">
            {task.map((evt)=>[
                <div className="linha">
                    <p>{evt.text}</p>
                    <button onClick={(evt)=>{
                       tarefas.pop()
                       console.log(tarefas)
                    }}>apagar</button>
                </div>
            ])}
        </div>   
    )
}

export default Task