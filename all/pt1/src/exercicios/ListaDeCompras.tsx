import React, { useState } from "react"

const ListaDeCompras = () => {
    const [tarefa, setTarefa] = useState<string>('')
    const [tarefas, setTarefas] = useState<string[]>([])

    const addTarefas = (tare:string):void=>{
        setTarefas((prevTarefas:string[]) => [tare, ...prevTarefas])
    }

    const heandleSubmit = (evt:React.FormEvent):void=>{
        evt.preventDefault()
        addTarefas(tarefa)
        setTarefa('')
    }

    return (
    <section>
        <form onSubmit={heandleSubmit}>
            <input 
            type="text"
            placeholder="Digite a tarefa..."
            value={tarefa}
            onChange={(evt:React.ChangeEvent<HTMLInputElement>)=> setTarefa(evt.target.value)}
            />

            <input type="submit" value="enviar" />
        </form>

        <ul>
            {tarefas.map((evt:string)=>[
                <li key={Date.now()}>{evt}</li>
            ])}
        </ul>

    </section>
  )
}

export default ListaDeCompras