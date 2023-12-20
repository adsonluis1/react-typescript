import { useReducer } from 'react'

const infoUsuarios = {
    nome:'adson',
    login:'adson dela',
    senha:'123adsom',
    id:'00001'
}

function editUso (estado, acao){

    switch (acao.tipo){
        case 'editNome':
            return {nome: 'adsin'}
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

    return (
    <section>
        <div>
            <p>nome:{estado.nome}</p>
            <p>nome:{estado.login}</p>
        </div>

        <div>
            <button onClick={()=> dispatch({tipo:'editNome'})}>Mudar</button>
            <button onClick={()=> dispatch({tipo: 'editLogin'})}>aaa</button>
        </div>
    </section>

    
  )
}

export default UseReducerT