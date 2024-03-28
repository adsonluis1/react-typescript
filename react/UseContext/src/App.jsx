import { useContext } from 'react'
import './App.css'
import { CountContext } from './contexts/CountContext/context'
import * as action from './contexts/CountContext/actions'
import * as types from './contexts/CountContext/types'
function App() {
  const {countDispatch, countState} = useContext(CountContext)
  return (
    <>
      <button onClick={()=> action.incrementCounter(countDispatch)}>mais</button>
      <button onClick={()=> action.decrementCounter(countDispatch)}>menos</button>
      {countState.counter}
    </>
  )
}

export default App
