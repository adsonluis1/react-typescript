import { useState } from "react"

function ListTask ({list}){

    
    return (
       <ul>
            {list.map((evt)=>(
                <li key={evt.id}>{evt.text}</li>
            ))}
       </ul>
    )
}

const tarefas = [
    {text:'limpar o quarto', id:1},
    {text:'comer' , id:2}, 
    {text:'tomar banho' , id:3}]

function Ex1 (){
    return (
       <ListTask list={tarefas}/>
    )
}

export default Ex1