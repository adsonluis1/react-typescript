import { useEffect, useState } from "react"

const HookUseCallbackB = ({getArray}) => {
    const [myItens, setMyItens] = useState([])

    useEffect(()=>{
        console.log('buscando array')
        setMyItens(getArray)
    
    },[getArray])
  
    return (
    
    <>
        {myItens && 
        myItens.map((e)=>[
            <p key={Math.floor(Math.random()*100000000)}>{e}</p>
        ])}
    </>
  )
}

export default HookUseCallbackB