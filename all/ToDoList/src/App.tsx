// hooks
import { useState } from 'react'
//style
import './App.css'
// components
import Form from './components/form/Form'
import Header from './components/header/Header'
import { Tarefas } from './components/tarefas/Tarefas'
// interface
interface Itarefas {
  name:string,
  dificuldade:string,
  id:number
}

function App() {
  const [tarefas, SetTarefas] = useState<Itarefas[]>([])
  const [clickedTarefas, setClickedTarefas] = useState<Itarefas>()

  return (
    <>
      <Header />   
      <Form SetTarefas={SetTarefas} clickedTarefas={clickedTarefas} setClickedTarefas={setClickedTarefas}/>   
      <Tarefas tarefas={tarefas} SetTarefas={SetTarefas} setClickedTarefas={setClickedTarefas}/>
    </>
  )
}

export type {Itarefas}
export default App
