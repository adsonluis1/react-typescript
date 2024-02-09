import React, { useContext } from 'react'
import { CounterContext } from '../context/CountContext'
const Home = () => {
  // fazendo o context sem o uso do hook personalizado
    const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
        <h1>Home</h1>
        <h2>valor do count: {counter}</h2>
        <button onClick={()=>{
            setCounter((prev)=> prev+1)
        }}>a+</button>
        <button onClick={()=>{
            setCounter((prev)=> prev-1)
        }}>a-</button>
    </div>
  )
}

export default Home