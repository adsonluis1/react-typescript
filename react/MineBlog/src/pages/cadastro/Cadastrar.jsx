import React, { useEffect, useState } from 'react'
import { useAuthenticator } from '../../hooks/useAuthenticator'
import style from './Cadastrar.module.css'

const Cadastrar = () => {
    const [email,setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [vsenha, setVsenha] = useState('')
    const [nome, setNome] = useState('')
    const [error, setError] = useState(null)
    
    const {createUser, error: authError, loading} = useAuthenticator()

    const handleSubmit = async (evt)=>{
        evt.preventDefault()
        setError('')
        
        if(senha !== vsenha){
            setError('As senhas precisam serem iguais')
            return
        }

        const user = {
            email,
            senha,
            nome
        }

        const res = await createUser(user)

        console.log(res)
    }
  
    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    },[authError])

    return (
    <section className={style.section}>
        <h1>Cadastro</h1>
        <h2>Preencha com suas informações para efetuar o cadastro</h2>

        <form className={style.form} onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="nome">Nome:</label>
            <input 
            type="text" 
            id="nome" 
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            required
            />

            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
            />

            <label htmlFor="senha">Senha:</label>
            <input 
            type="password" 
            id="senha" 
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}
            required
            />

            <label htmlFor="vsenha">Confirme senhar:</label>
            <input 
            type="password" 
            id="vsenha" 
            value={vsenha}
            onChange={(e)=> setVsenha(e.target.value)}
            required
            />

            
            {!loading && <input className={style.submit} type="submit" value="cadastrar" />}
            {loading && <button disabled>...aguarde</button>}
            {error && <p className='pError'>{error}</p>}
        </form>
    
    </section>
  )
}

export default Cadastrar