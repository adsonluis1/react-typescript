import './App.css'
import { useState, useEffect } from 'react'
import UseMediaQuery from './hooks/UseMediaQuery'
import HomeM from './pages/mobile/Home/HomeM'
import HomeP from './pages/pc/Home/HomeP'




function App() {
  const typeScreen = UseMediaQuery()
  
  return (
    <>
    {typeScreen !='pc' && typeScreen !='notbook' && <HomeM />}
    {typeScreen !='celular' && typeScreen !='tablet' && <HomeP />}
    </>
  )
}

export default App
