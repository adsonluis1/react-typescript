import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login (){
    const [name, setNome] = useState()

    const navigate = useNavigate()
    
    const oltSubmit = (evt)=>{
        evt.preventDefault()
        console.log(`ola ${name}`)
        navigate('/') 
        alert('login efetuado')
    }
    return (
        <form onSubmit={oltSubmit}>
            <input 
            type="text"
            value={name}
            onChange={(evt)=> setNome(evt.target.value)}
            />
            <input 
            type="submit" 
            value="enviar" 
            />
        </form>
    )
}

export default Login