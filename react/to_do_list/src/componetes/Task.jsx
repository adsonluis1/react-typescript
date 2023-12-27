function Task ({task}){
    return (
        <div id="lista">
            {task.map((evt)=>[
                <div key={evt.id} className="linha">
                    <p>{evt.text}</p>
                    <button onClick={(evt)=>{
                       task.pop()
                       console.log(task)
                    }}>apagar</button>
                </div>
            ])}
        </div>   
    )
}

export default Task