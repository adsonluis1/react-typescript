import { useReducer } from "react"

const primeiroEstado = {contador:0}

function contador (estado,acao){
    switch(acao.qualquercoisa){
        case 'mais':
            return {contador : estado.contador + 1}
        case 'menos':
            return {contador : estado.contador - 1}
        case 'zerar':
            return {contador : 0}
        default:
            return console.log('error')    
    }
        
}

function UserReducer (){
    const [estado,dispatch] = useReducer(contador,primeiroEstado)
    
    return (
        <div>
            <h1>{estado.contador}</h1>
            <button onClick={()=> dispatch({qualquercoisa:'mais'})}>aumentar</button>
            <button onClick={()=> dispatch({qualquercoisa:'menos'})}>diminuir</button>
            <button onClick={()=> dispatch({qualquercoisa:'zerar'})}>reset</button>
        </div>
    )
}

export default UserReducer