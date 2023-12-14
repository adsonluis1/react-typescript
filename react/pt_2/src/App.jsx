import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wellcome from './components/Wellcome'
import Plaseholder from './components/Plaseholder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wellcome />
    <Plaseholder />
    </>
  )
}

export default App
