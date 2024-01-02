import { useParams } from "react-router-dom"

function Tarefas (){
    const {taskId} = useParams()

    if(taskId == '1'){
        return <h1>hehehehe</h1>
    }
    return (
        <p>tarefa {taskId}</p>
    )
}

export default Tarefas