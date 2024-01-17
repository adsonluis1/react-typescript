import { Link } from "react-router-dom"
import { final } from "../types/Final"


const Final = ({pessoas, carnes}:final) => {
  return (
    <section>
        <div>
            <h1>Resultado churrasco</h1>
        </div>

        <div id="divResultado">
            <h2>Resultado para {pessoas} {pessoas=='1'?'pessoa':'pessoas'}</h2>
            {carnes.carne?<p>Carne:{parseInt(pessoas) * 0.4}Kg</p>:''}
            {carnes.frango?<p>Frango:{parseInt(pessoas) * 0.2}Kg</p>:''}
            {carnes.linguiça?<p>Linguiça:{parseInt(pessoas) * 0.2}Kg</p>:''}
            {carnes.paoDeAlho?<p>Pao de Alho:{parseInt(pessoas) * 0.1}Kg</p>:''}
            <Link to={'/'}><button className="btn">Reiniciar</button></Link>
        </div>


    </section>
  )
}

export default Final