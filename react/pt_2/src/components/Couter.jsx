import { useState } from "react"

function Couter (){
    
    const [couter , setCouter] = useState(0)

    return (
        <div>
           <h1>conta: {couter}</h1>
           
            <button id="btn" onClick={()=> setCouter(couter + 1)}>aumentar</button>
           
        </div>
    )

}

export default Couter