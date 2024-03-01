import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const HookUseImperativeHandleB = forwardRef((props, ref)=>{
    const localinputRef = useRef()
    
    useImperativeHandle(ref,()=>{
        return{
            validate: () => {
                if(localinputRef.current.value.length > 3){
                    localinputRef.current.value = ''
                }
            }
        }
    })

    return (
    <>
         <label>
            Nome:
            <input 
            type="text"
            placeholder="Digite um nome"
            ref={localinputRef}
            />
        </label>
    </>
    )

})

export default HookUseImperativeHandleB