import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sertch from './Components/Sertch'
import Repositorios from './Components/Repositorios'
import { useState } from 'react'
function App() {
  const [conta, setConta] = useState<string>('')
  const [showSertch, setShowSertch] = useState<boolean>(true)
  const [erro, setErro] = useState<string | unknown>('a')
  return (
    <>
      <header>
        <div id="divTitle">
          <h1>GitHub Finder</h1> 
        </div> 
      </header>
      
      {showSertch?<Sertch conta={conta} setConta={setConta} setShowSertch={setShowSertch} setErro={setErro} erro={erro}/>:''}
      
      <Routes>
        <Route path='/Repositorio' element={<Repositorios repositorios={conta} setShowSertch={setShowSertch} setConta={setConta} setErro={setErro}/>}/>
      </Routes>

    </>
  )
}

export default App
