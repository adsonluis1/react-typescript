import { useState } from "react";

function LoginT (){
    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [email,setEmail] = useState('')

    const Submit = (evt)=>{
        evt.preventDefault()

        console.log('nome: ' + nome)
        console.log('idae: ' + idade)
        console.log('email: ' + email)
    }

    return (    
        <form onSubmit={Submit}> 

            <div>
                <input type="text"
                placeholder="Nome"
                value={nome}
                onChange={(evt)=>{
                    setNome(evt.target.value)
                }}
                />
            </div>

            <div>
                <input type="number"
                placeholder="number"
                value={idade}
                onChange={(evt)=>{
                    setIdade(evt.target.value)
                }}
                
                />
            </div>
            
            <div>
                <input type="email"
                placeholder="e-mail"
                value={email}
                onChange={(evt)=>{
                    setEmail(evt.target.value)
                }}
                />
            </div>
    
            <button type="submit" id="btn">enviar</button>

           
           
        </form>
    )
}

export default LoginT