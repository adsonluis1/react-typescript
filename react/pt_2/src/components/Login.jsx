import { useState } from "react"

function Login(){

    const [nome, setNome] = useState('')
    const [email , setEmail] = useState('')

    const Submit = (evt)=> {
        evt.preventDefault()

        
    }

    return (
        
            <form onChange={Submit}>
                <label htmlFor="nome">Nome</label>
                <input 
                type="text" 
                id="nome" 
                placeholder="Digite seu nome"
                value={nome}
                onChange={(evt)=> setNome(evt.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Digite seu email"
                value={email}
                onChange={(evt)=> setEmail(evt.target.value)}
                />
                {email}
                <input type="button" value="enviar" id="btn" onClick={()=>{
                    console.log(nome)
                    console.log(email)
                }}/>
            </form>
        
    )
}

export default Login