import { useState } from "react";

function LoginT2(){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const Submit = (evt)=>{
        evt.preventDefault()
    }

    return (
        <div>
            <form onSubmit={Submit}>
                    <input 
                    type="text" 
                    value={nome}
                    placeholder="nome"
                    onChange={(evt)=>{
                        setNome(evt.target.value)
                    }}
                    />

                    <input 
                    type="password"
                    value={senha}
                    placeholder="senha"
                    onChange={(evt)=>{
                        setSenha(evt.target.value)
                    }}
                    />

                    <button>Enviar</button>
            </form>
        </div>
    )
}

export default LoginT2