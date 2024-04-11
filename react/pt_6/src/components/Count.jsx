import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
        setCount((count)=> count + 1)
    }

    const uncrement = ()=>{
        setCount((count)=> count - 1)
    }

    if (count > 2){
        throw Error('Ops, algo deu errado')
    }

    return (
        <section>
            <h1>{count}</h1>
            <div><button onClick={()=> increment()}>+</button></div>
            <div><button onClick={()=> uncrement()}>-</button></div>
        </section>
    )
}

export default Count