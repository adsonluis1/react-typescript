import React, { Children, cloneElement, useState } from 'react'

const TurnOnOf = ({children}) => {
    const [turn, setTurn] = useState(false)
    const clickTurn = ()=>{
        setTurn((s)=> !s)
    }

    return Children.map(children, (child) => {
            if(typeof child.type === 'string')
                return child

            const newChild = cloneElement(child,{clickTurn, turn})
            return newChild
            
        })
}

const TurnOn = ({turn,children}) =>{
    return turn?null:children
}

const TurnOf = ({turn,children}) =>{
    return turn?children:null
}

const ClickTurn = ({turn, clickTurn}) => {
    return <button onClick={()=> clickTurn()}>Click para deixar {turn?'On':'Off'}</button>
}


const PadraoCompound = () => {
    
  return (
    <TurnOnOf>
        <TurnOn>Click para deixar On</TurnOn>
        <TurnOf>Click para deixar Of</TurnOf>
        <br />
        <ClickTurn />
    </TurnOnOf>
  )
}

export default PadraoCompound