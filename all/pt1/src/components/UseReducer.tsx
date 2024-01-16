import { useReducer } from "react"
import { coutReducer } from "./coutReducer"

const UseReducer = () => {
    const [cout, dispatch] = useReducer(coutReducer, 0)
    
    return (
    <div>
        <div><h1>{cout}</h1></div>
        <button onClick={()=> dispatch('mais')}>aumentar</button>
       {cout<=0?'':<button onClick={()=> dispatch('menos')}>diminuir</button>}
    </div>
  )
}

export default UseReducer