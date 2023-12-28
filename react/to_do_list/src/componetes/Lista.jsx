import { Children, useEffect, useState } from "react"
import Task from "./Task"


function Lista ({tarefas, funck, click}){

    return (
        <div id="lista">
        {tarefas.map((evt)=>[
            <Task key={evt.id} task={evt} funck={() => funck(evt.id)} marcar={()=> click(evt.id)}/>
        ])}
        </div>
    )
}

export default Lista
