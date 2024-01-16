import React, { useState } from "react"

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    
    const heandleSubmit = (evt:React.FormEvent)=>{
        evt.preventDefault()

        alert(`Bem vindo ${login}`)
    }
    return (
    <section>
        <h1>Login</h1>
        <form onSubmit={heandleSubmit}>
            <div>
                <input
                type="text"
                value={login}
                onChange={(evt)=>{setLogin(evt.target.value)}}
                placeholder="Digite o nome do usuario..."
                />
            </div>

            <div>
                <input
                type="password"
                onChange={(evt)=>{setSenha(evt.target.value)}}
                value={senha}
                placeholder="Digite a senha..."
                />
            </div>

            <div>
                <input 
                type="submit" 
                value="enviar" 
                />
            </div>
        </form>
    </section>
  )
}

export default Login