import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sertch from './Components/Sertch'
import Repositorios from './Components/Repositorios'
import { useState } from 'react'
function App() {
  const [conta, setConta] = useState<string>('')


  return (
    <>
      <Sertch conta={conta} setConta={setConta}/>
      <Routes>
        <Route path='/Repositorio' element={<Repositorios repositorios={conta}/>}/>
      </Routes>
    </>
  )
}

export default App
