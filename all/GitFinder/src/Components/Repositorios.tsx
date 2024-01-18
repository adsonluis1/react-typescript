import axios from "axios"
import { useEffect, useState } from "react"
import { repositorio } from "../Types/repositorios"
import { repositorios } from "../Types/repositorios"


const Repositorios = ({repositorios}:repositorio) => {
    const [repositorio, setRepositorio] = useState<[repositorios]>()
    let arr:number[]= []

    repositorio?.map((evt:repositorios)=>{
       arr.push(evt.stargazers_count)
       arr.sort((a:number,b:number)=> b-a)
       arr = arr.splice(0,3)
    })

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
    
    
    const directPages = (evt:repositorios)=>{
        window.open(evt.html_url, '_blank')
    }
    return (
    <section id="sectionRepositorio">

         {repositorio?.map((evt:repositorios)=>[


            <div key={evt.id} className="divRepositorios">
                <h2>{evt.name}</h2>
                <h3>{'</>'} {evt.language}</h3>
                <div className="StarFork">
                    <div className="divEstrela">
                        <p>{evt.stargazers_count}</p>
                        <p className="pEstrela">⭐</p>
                    </div>

                    <div className="divForks">
                        <p>0</p>
                        <p className="pForks">♆</p>
                    </div>
                </div>

                <button onClick={()=> directPages(evt)}>Ver codigo</button>
            </div>
        ])} 
    </section>
  )
}

export default Repositorios