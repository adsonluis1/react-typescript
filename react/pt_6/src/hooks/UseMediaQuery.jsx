import { useEffect, useState } from "react"

const UseMediaQuery = () => {
    // 400px - celular
    // 700px - tablet
    // 1100px - notbook
    // 1001px - pc
    const [tela, setTela] = useState(null) 
    useEffect(()=>{
        if(window.matchMedia('(max-width: 400px)').matches)
        setTela('celular')
    else if(window.matchMedia('(max-width: 700px)').matches)
        setTela('tablet')        
    else if(window.matchMedia('(max-width: 1100px)').matches)
        setTela('notbook')
    else
        setTela('pc')
    },[])
    window.addEventListener('resize', ()=>{
        if(window.matchMedia('(max-width: 400px)').matches)
            setTela('celular')
        else if(window.matchMedia('(max-width: 700px)').matches)
            setTela('tablet')        
        else if(window.matchMedia('(max-width: 1100px)').matches)
            setTela('notbook')
    // window.matchMedia('(min-width: 1101px)')
        else
            setTela('pc')

    })
   
   
    return tela
}

export default UseMediaQuery