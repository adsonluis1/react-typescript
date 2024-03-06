import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header/Header'
import PosterFocus from './pages/posterFocus/PosterFocus'
import { useState } from 'react'
import QueryMovie from './pages/queryMovie/QueryMovie'
function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/filme/:id/:query' element={<PosterFocus />}/>
          <Route path='/flme/:query' element={<QueryMovie />}/>
      </Routes>
    </>
  )
}

export default App
