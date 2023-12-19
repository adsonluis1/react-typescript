import { useEffect , useState } from "react"

function UseEfect (){
    const [num, setNum] = useState(0)
    
    useEffect(()=>{
        document.title = `vc clicou ${num} vezes`
        })

    return (
        <div>
            <button onClick={(evt)=>{
                setNum(num + 1)
            }}>+</button>


            <button onClick={(evt)=>{
                setNum(num - 1)
            }}>-</button>
        </div>
        
    )
}

export default UseEfect