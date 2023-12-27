import { Children } from "react"
import Task from "./Task"

function Lista ({tarefas}){
    const apagar = (evt)=>{
        evt.parentNode()
    }

    return (
        <Task task={tarefas}/>  
    )
}

export default Lista