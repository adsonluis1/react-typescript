import reactLogo from './assets/react.svg'
import './App.css'
import BarraDeAdd from './componetes/BarraDeAdd'
import { tarefas } from './componetes/BarraDeAdd'
import Lista from './componetes/Lista'
import { useState } from 'react'
function App() {

  const [task, setTask] = useState([]) 

  const addTask = (evt)=>{
    setTask([...task], {id: Date.now(), text:task})
  }

  return (

    <main>
        <h1>lista de tarefas</h1>

        <BarraDeAdd onTask={addTask}/>
        <Lista tarefas={tarefas}/>
    </main>
  )
}

export default App
