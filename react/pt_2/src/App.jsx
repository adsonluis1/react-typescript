import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wellcome from './components/Wellcome'
import Plaseholder from './components/Plaseholder'
import PropsDesustrurada from './components/PropsDesustrurada'
import './App.css'
import Props from './components/Props'
import Couter from './components/Couter'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Wellcome />
    <Plaseholder />
    <Props goleiro='pedro' zaga1='marquinhos' zaga2='caça rato' latera1='maicon' latera2='douglas'/>
    <PropsDesustrurada nome={'lola'} idade={3} raca={'pincher'}/> 
    <Couter /> */}
    <Login />
    </>
  )
}

export default App
