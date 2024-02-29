//use Ref é ultilizado como useState para gerenciar valores, uma diferença é que ele não re-renderiza o componente
import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
    let countRederização = useRef(0)
    const  [count, setCount] = useState(0)
    const  [countB, setCountB] = useState(0)
    const [t, setT] = useState('')


    useEffect(()=>{countRederização.current= countRederização.current+1})
    // toda vez que o useState renderiza a pagina por ser mudado de valor o useRef aumenta +1 do seu valor

    // useRef com Dom
    const inputRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        // pode ser usado igual o js native 
        inputRef.current.setAttribute('class', 'minha-class')
        inputRef.current.focus()

        setT('')
    }

    return (
    <div>
        <h1>UseRef</h1>
        <p>Vezes que foi re-renderizado:{countRederização.current}</p>
        
        <h2>count:{count}</h2>
        <button onClick={()=> setCount((prev)=> prev + 1)}>click Count</button>
        <h2>count:{countB}</h2>
        <button onClick={()=> setCountB((prev)=> prev + 1)}>click Count B</button>
        
        <h2>UseRef com DOM</h2>

        <form onClick={handleSubmit}>
            <input 
            type="text"
            ref={inputRef}
            value={t}
            onChange={(e)=> setT(e.target.value)
            }
            />

            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default HookUseRef