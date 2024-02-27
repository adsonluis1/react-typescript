import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import style from './Login.module.css'
import { useAuthenticator } from '../../hooks/useAuthenticator'

const Login = () => {
  const [email,setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {login, error: authError, loading} = useAuthenticator()
  const [error, setError] = useState('')

  const handleSubmit = async (evt)=>{
    evt.preventDefault()
    setError('')
    
    const user = {
      email,
      senha
    }

    const res = await login(user)

  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])
    return (
    <section className={style.section}>
        <h1>Entrar</h1>
        <h2>Faça o login para utilizar o sistema</h2>

        <form className={style.form} onSubmit={(evt)=>handleSubmit(evt)}>
            <label htmlFor='email'>Email:</label>
        
            <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id='email'
            required
            />

            <label htmlFor='senha'>Senha:</label>

            <input 
                type="password"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                id='senha'
                required
                />

            <nav>
              {error && <p className={style.pError}>{error}</p>}
              {!loading && <input className={style.submit} type="submit" value="Entrar" />}
              {loading && <button  disabled>...aguarde</button>}
            </nav>
           
            <p>Não tem login? <Link to={'/cadastro'}>Click aqui</Link></p>
        </form>
    </section>
  )
}

export default Login