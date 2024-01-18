import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sertch from './Components/Sertch'
import Repositorios from './Components/Repositorios'
import { useState } from 'react'
function App() {
  const [conta, setConta] = useState<string>('')
  const [showSertch, setShowSertch] = useState<boolean>(true)

  return (
    <>
      <header>
        <div id="divTitle">
          <h1>GitHub Finder</h1> 
        </div> 
      </header>
      
      {showSertch?<Sertch conta={conta} setConta={setConta} setShowSertch={setShowSertch}/>:''}
      
      <Routes>
        <Route path='/Repositorio' element={<Repositorios repositorios={conta}/>}/>
      </Routes>
    </>
  )
}

export default App
