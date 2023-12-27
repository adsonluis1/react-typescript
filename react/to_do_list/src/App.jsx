import reactLogo from './assets/react.svg'
import './App.css'
import BarraDeAdd from './componetes/BarraDeAdd'
import Lista from './componetes/Lista'
import { useState, useEffect } from 'react'
function App() {

  const [tasks, setTask] = useState([]) 

    const addTask = (evt) => {
    setTask([...tasks, {id: Date.now(), text:evt}])
  }

  return (

    <main>
        <h1>lista de tarefas</h1>
        <BarraDeAdd onTask={addTask}/>
        <Lista tarefas={tasks}/>
        
    </main>
  )
}

export default App
