import axios from "axios"
import { useEffect, useState } from "react"
import { repositorio } from "../Types/repositorios"
import { repositorios } from "../Types/repositorios"


const Repositorios = ({repositorios}:repositorio) => {
    const [repositorio, setRepositorio] = useState<[repositorios]>()
    
    useEffect(()=>{
        const heandle = async ()=>{
                try {
                    const responde = await axios.get(`https://api.github.com/users/${repositorios.login}/repos`)
                    setRepositorio(responde.data)
                } catch (error) {
                    console.log(error)
                }    
        }

        heandle()
    },[])
    
    console.log(repositorio)

    return (
    <section id="sectionRepositorio">
        {repositorio?.map((evt:repositorios)=>[
            <div key={evt.id} className="divRepositorios">
                <h2>{evt.name}</h2>
                <h3>{'</>'} {evt.language}</h3>
                <div className="StarFork">
                    <div className="divEstrela">
                        <p>{evt.stargazers_count}</p>
                        <p>⭐</p>
                    </div>

                    <hr />
                    
                    <div className="divForks">
                        <p>{evt.fork_count}</p>
                        <p>♆</p>
                    </div>
                </div>

                <button>Ver codigo</button>
            </div>
        ])}
    </section>
  )
}

export default Repositorios