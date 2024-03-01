import { useRef, useState } from "react"
import HookUseImperativeHandleB from "./HookUseImperativeHandleB"



const HookUseImperativeHandle = () => {
    const elementRef = useRef()

    return (
    <div>
        <h1>UseImperativeHandle</h1>
        <HookUseImperativeHandleB ref={elementRef}/>
        <button onClick={()=> elementRef.current.validate()}>enviar</button>
    </div>
  )
}

export default HookUseImperativeHandle