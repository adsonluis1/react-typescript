import { useState, useEffect } from "react"

function BarraDeAdd ({onTask}){

    const oltSubmit = (evt)=>{
        evt.preventDefault()
      } 

      const [task, setTask] = useState('')


    return (
        <div>
            <form onSubmit={oltSubmit}>
            <input type="text"
            onChange={(evt)=> setTask(evt.target.value)}
            value={task}/>
            <input 
            type="button" 
            value="enviar" 
            id="btn_enviar"
            onClick={()=>{
                if(task != ''){
                onTask(task)
                setTask('')
               }
            }}
            />
            </form>
            
        </div>
    )
}

export default BarraDeAdd 
