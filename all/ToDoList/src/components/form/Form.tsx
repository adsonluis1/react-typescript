import React, {Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from './Form.module.css'
import {Itarefas} from '../../App'

interface Iform {
    SetTarefas:Dispatch<SetStateAction<Itarefas[]>>,
    clickedTarefas:Itarefas | undefined,
    setClickedTarefas:Dispatch<SetStateAction<Itarefas | undefined>>
}

const Form = ({SetTarefas, clickedTarefas, setClickedTarefas}:Iform) => {
    const [tarefa, setTarefa] = useState<string>('') 
    const [dificuldade, setDificuldade ] = useState<string>('')

    const removeTarefa = (e:Itarefas)=>{
        SetTarefas((prev)=> prev.filter((ele)=> ele.name != e.name))
      }  

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        let newTarefa:Itarefas = {
            name:tarefa,
            dificuldade,
            id: Date.now()
        }

        SetTarefas((prev)=> [...prev, newTarefa])
        setTarefa('')
        setDificuldade('')
        if(clickedTarefas){
            removeTarefa(clickedTarefas)   
        }
        setClickedTarefas(undefined)
    }

    useEffect(()=>{
        if(clickedTarefas){
        setTarefa(clickedTarefas.name)
        setDificuldade(clickedTarefas.dificuldade)
        } 
    },[clickedTarefas])

    return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <h1>O que vc vai fazer</h1>
        <label>
            Tarefa:
            <input 
            type="text"
            value={tarefa}
            required
            placeholder="Digite sua tarefa aqui..."
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTarefa(e.target.value)}
            />
        </label>

        <label>
            Dificuldade:
            <input 
            type="number"
            value={dificuldade}
            min={1}
            max={5}
            required
            placeholder="Dificuldade de 1 até 5"
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setDificuldade(e.target.value)}
            />
        </label>

        <input type="submit" value="Enviar" />
    </form>
  )
}

export default Form