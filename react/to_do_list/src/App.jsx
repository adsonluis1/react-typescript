import reactLogo from './assets/react.svg'
import './App.css'
import BarraDeAdd from './componetes/BarraDeAdd'
import Lista from './componetes/Lista'
import { useState, useEffect } from 'react'
import Task from './componetes/Task'
function App() {

  const [tasks, setTask] = useState([]) 

    const addTask = (evt) => {
    setTask([...tasks, {id: Date.now(), text:evt, done:false}])
  }

  const apagar = (evt)=>{
    setTask(tasks.filter((task)=> task.id !== evt))
}

  const click = (evtId)=>{
    setTask(tasks.map((evt) => evt.id === evtId ? {...evt, done: !evt.done} : evt))
  }

  return (

    <main>
        <h1>lista de tarefas</h1>
        <BarraDeAdd onTask={addTask}/>
        <Lista tarefas={tasks} funck={apagar} click={click}/>
    </main>
  )
}

export default App
