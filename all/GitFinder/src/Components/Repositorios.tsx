import axios from "axios"
import { useEffect, useState } from "react"
import { repositorio } from "../Types/repositorios"
import { repositorios } from "../Types/repositorios"


const Repositorios = ({repositorios}:repositorio) => {
    const [repositorio, setRepositorio] = useState<[repositorios]>()
    let index:number
    let newArr:repositorios[] = []
    
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

       
    if (repositorio) {
        repositorio!.splice(0,3).map((evt:repositorios)=>{
            newArr.push(evt)
        })
    }
   

    const filter = async ()=>{
        for(var n in newArr!){
            await repositorio!.map((evt:repositorios)=>{
                if(evt.stargazers_count > newArr[n].stargazers_count){
                    newArr.splice(parseInt(n),1,evt)
                    index = repositorio!.indexOf(evt)
                }
            })
            
            await repositorio!.splice(index!,1)
    }
        console.log(newArr)
}
        
        
    
    
    const directPages = (evt:repositorios)=>{
        window.open(evt.html_url, '_blank')
    }

    filter()
    console.log(...newArr)
    return (
        <section id="sectionRepositorio">
    
             {newArr?.map((evt:repositorios)=>[
    
    
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