import React, { useReducer } from 'react'

const TUseReducer = () => {
    const initPessoas = [
        {nome:'adson',
        idade:18},
        {nome:'rafaelle',
        idade:19}, 
        {nome:'luis',
        idade:25}
    ]

    const newPessoa = {
        nome:'roberto',
        idade:38
    }

    const addPessoas = (state, style)=>{
        switch (style.modo){
            case 'ADD':
                return [...state, newPessoa]
                default:
                    return state
        }
    }

    const [pessoas, dispatch] = useReducer(addPessoas, initPessoas)

    console.log(pessoas)
    
    return (
    <div>
        <button onClick={()=>dispatch({modo:'ADD'})}>add ao reducer</button>
    </div>
  )
}

export default TUseReducer