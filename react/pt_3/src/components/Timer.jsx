import { useEffect, useState } from "react"

function Timer (){
   const [seg, setSeg] = useState(0)

   useEffect(()=>{

        const interval = setInterval(()=>{
            setSeg((prevSeg)=>prevSeg + 1)
        },1000)

        return ()=> clearInterval(interval)

   },{})
    

    return (
        <div>
            <h1>Cronometro</h1>
            <p>foram {seg} segundos</p>
        </div>
    )
}

export default Timer