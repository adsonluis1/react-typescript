import { useParams } from "react-router-dom"

function Tarefas (){
    const {taskId} = useParams()

    return (
        <p>tarefa {taskId}</p>
    )
}

export default Tarefas