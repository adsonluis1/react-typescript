import { useNavigate } from "react-router-dom"
import { showconta } from "../Types/showConta"

const ShowConta = ({conta}:showconta) => {
    const navigator = useNavigate()
  
    return (
    <section id="sectionShowConta">
        <img src={conta.avatar_url} alt="foto de usuario" />

        <h2>{conta.login}</h2>

        {typeof conta.location == 'string' ?<p>📍{conta.location}</p>: <p>Localização não informada</p>}
    
        <div id="divSegui">
            <div id="divSeguidores">
                <p>Seguidores:</p>
                <p id="telaSeguidores">{conta.followers}</p>
            </div>

            <hr />

            <div id="divSeguindo">
                <p>Seguindo:</p>
                <p id="telaSeguindo"> {conta.following}</p>
            </div>
        </div>

        <button onClick={()=>{
            navigator('/Repositorio')
        }} id="verMelhoresProjetos">Ver melhores projetos</button>
    </section>
  )
}

export default ShowConta