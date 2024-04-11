import './App.css'
import { useState, useEffect } from 'react'
import UseMediaQuery from './hooks/UseMediaQuery'
import HomeM from './pages/mobile/Home/HomeM'
import HomeP from './pages/pc/Home/HomeP'
import Count from './components/Count'
import ErrorBoundary from './components/ErrorBoudary'




function App() {
  const typeScreen = false
  // UseMediaQuery()
  
  return (
    <>
      <h1>com ErrorBoundary</h1>
      <ErrorBoundary>
        <Count />
      </ErrorBoundary>
      <h1>sem ErrorBoundary</h1>
      <Count />
    {typeScreen && typeScreen !='pc' && typeScreen !='notbook' && <HomeM />}
    {typeScreen && typeScreen !='celular' && typeScreen !='tablet' && <HomeP />}
    </>
  )
}

export default App
