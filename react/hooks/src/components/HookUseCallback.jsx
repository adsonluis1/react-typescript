// useCallback ele vai salvar um return de uma função, assim melhorando a performasse do app

import { useCallback, useState } from "react"
import HookUseCallbackB from "./HookUseCallbackB"

const HookUseCallback = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [arr, setArr] = useState(['a','b','c','d'])
    const getArray = useCallback(
        ()=>{
            return arr
        }
    ,[arr])
    
    const addItemInArray = (item)=>{
        setArr((prev) => [...prev, item])
        console.log(arr)
    }

    
    return (
    <div>
        <h1>UseCallback</h1>
        <HookUseCallbackB getArray={getArray}/>
        <input 
        type="text"
        placeholder="add item no array"
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button onClick={(e)=> addItemInArray(text)}>adicionar</button>
        <br />
        <button onClick={(e)=> setCount((prev)=>prev + 1)}>aumentar</button>
        <p>{count}</p>
    </div>
  )
}

export default HookUseCallback