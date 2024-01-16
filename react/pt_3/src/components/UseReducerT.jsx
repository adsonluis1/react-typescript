import { useReducer, useState } from 'react'

const infoUsuarios = {
    nome:'adson',
    login:'adson dela',
    senha:'123adsom',
    id:'00001'
}

function editUso (estado, acao){
    const [nome, setnome] = useState('')
    switch (acao.tipo){
        case 'editNome':
            return {nome: 'adon'}
        case 'editLogin':
            return {login: 'rei adsin'}
        case 'editSenha':
            return {senha:  '123456'} 
        default :
            return infoUsuarios
    }

}

const UseReducerT = () => {
    const [estado, dispatch] = useReducer(editUso,infoUsuarios) 
    
    
    const headSubmit = (evt)=>{
        evt.preventDefault()
        dispatch({tipo:'editNome'})
    }

    return (
    <section>
        <div>
            <p>nome:{estado.nome}</p>
            <p>nome:{estado.login}</p>
        </div>

        <form onSubmit={headSubmit}>
            <input 
            type="text"
            />
            <input type="submit" value="enviar" />
        </form>
    </section>

    
  )
}

export default UseReducerT