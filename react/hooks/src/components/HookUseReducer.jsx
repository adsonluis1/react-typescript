import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    const [name, setName] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatchReducer({text:'ADD'})
    }

    const removeReducer = (id)=>{
        dispatchReducer({text:'REMOVE', id})
    }

    const objReducer = [
        {id:1,
        text:'a chuva cai'},
        {id:2,
        text:'o sol queima'}
    ]

    const reducerSwitch = (state, type)=>{
        switch(type.text){
            case 'ADD':
                const newObj = {
                    id:Math.random(),
                    text:name
                }
            return [...state, newObj]

            case 'REMOVE':
                return state.filter((e)=> e.id !== type.id)
            default:
                return state
        }
    }

    const [reducer, dispatchReducer] = useReducer(reducerSwitch, objReducer)
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <input type="submit" value="enviar"/>
        </form>

        <h2>textos:</h2>
        <ul>
            {reducer && reducer.map((e)=>[
                <li key={e.id} onDoubleClick={()=> removeReducer(e.id)}>{e.text}</li>
            ])}
        </ul>
    </div>
  )
}

export default HookUseReducer