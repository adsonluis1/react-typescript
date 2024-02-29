//use Ref é ultilizado como useState para gerenciar valores, uma diferença é que ele não re-renderiza o componente
import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
    let countRederização = useRef(0)
    const  [count, setCount] = useState(0)
    const  [countB, setCountB] = useState(0)
    
    useEffect(()=>{countRederização.current= countRederização.current+1})

    return (
    <div>
        <h1>UseRef</h1>
        <p>Vezes que foi re-renderizado:{countRederização.current}</p>
        
        <h2>count:{count}</h2>
        <button onClick={()=> setCount((prev)=> prev + 1)}>click Count</button>
        <h2>count:{countB}</h2>
        <button onClick={()=> setCountB((prev)=> prev + 1)}>click Count B</button>
    </div>
  )
}

export default HookUseRef