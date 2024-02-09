import { CounterContext } from "../context/CountContext";
import { useContext } from 'react'

const UseCountContext = () => {
    const count = useContext(CounterContext)
    if(count) return count
    else{console.log('Error no context')}
}

export default UseCountContext