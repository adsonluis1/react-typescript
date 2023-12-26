import { useState, useEffect } from "react"

function BarraDeAdd ({onTask}){
    const oltSubmit = (evt)=>{
        evt.preventDefault()
      } 

      const [tarefa, setTarefa] = useState('')

    return (
        <div>
            <form onSubmit={oltSubmit}>
            <input type="text"
            onChange={(evt)=> setTarefa(evt.target.value)}
            value={tarefa}/>
            <input 
            type="button" 
            value="enviar" 
            id="btn_enviar"
            onClick={()=>{
                if(tarefa != ''){
                console.log(tarefa)
                onTask(tarefa)
                setTarefa('')
               }
            }}
            />
            </form>
            
        </div>
    )
}

export default BarraDeAdd 
