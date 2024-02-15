import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [email,setEmail] = useState('')
  const [senha, setSenha] = useState('')

    const handSubmit = (evt)=>{
    evt.preventDefault()
    }
  
    return (
    <section>
        <h1>Entrar</h1>
        <h2>Faça o login para utilizar o sistema</h2>

        <form onSubmit={(evt)=>handSubmit(evt)}>
            <label htmlFor='email'>Email:</label>
        
            <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id='email'
            />

            <label htmlFor='senha'>Senha:</label>

            <input 
                type="password"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                id='senha'
                />
            <input type="submit" value="Entrar" />
        </form>
    </section>
  )
}

export default Login