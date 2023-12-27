import { Children } from "react"
import Task from "./Task"

function Lista ({tarefas}){
    const apagar = (evt)=>{
        evt.parentNode()
    }

    return (
        <Task key={tarefas.id} tarefas={tarefas}/>  
    )
}

export default Lista