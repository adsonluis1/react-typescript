import { useEffect, useState} from "react"

function TimerT (){
    const [seg,setSeg] = useState(0)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
        setSeg((prevSeg) => prevSeg + 1)
    },1000)

    return ()=> clearInterval(interval)

    },[])
    
    return (
        <div>
            <p>{seg} segundos</p>
        </div>
    )
}

export default TimerT