import axios from "axios"
import { useEffect, useState } from "react"
import { repositorio } from "../Types/repositorios"
import { repositorios } from "../Types/repositorios"
import { useNavigate } from "react-router-dom"


const Repositorios = ({repositorios, setShowSertch, setConta, setErro}:repositorio) => {
    const [repositorio, setRepositorio] = useState<repositorios[]>()
    let index:number
    let newArr:repositorios[] = []
    const [topsRepositorios, setTopsRepositorios] = useState<repositorios[]>([])
    const navigate = useNavigate()
    useEffect(()=>{

        const heandApi = async ()=>{

           try {
            const response = await axios.get(`https://api.github.com/users/${repositorios.login}/repos`)
            await setRepositorio(response.data)   
        } catch (error) {
            console.log(error)
           }
        }

        heandApi()
    },[])
  

        if (repositorio) {
            repositorio!.splice(0,3).map((evt:repositorios)=>{
                newArr.push(evt)
            })
        }
       
        const filter = async ()=>{
            for(var n in newArr!){
                 repositorio!.map((evt:repositorios)=>{
                    if(evt.stargazers_count > newArr[n].stargazers_count){
                        newArr.splice(parseInt(n),1,evt)
                        index = repositorio!.indexOf(evt)
                    }
                })
                
                repositorio!.splice(index!,1)
        }

    }

    useEffect(()=>{
        filter()
        setTopsRepositorios(newArr)
    },[repositorio])

    const directPages = (evt:repositorios)=>{
        window.open(evt.html_url, '_blank')
    }

    console.log(topsRepositorios)
    return (
        <section id="sectionRepositorio">

            <button id="btn_voltar" onClick={()=>{
                navigate('/')
                setShowSertch(true)
                setConta('')
                setErro('a')
                }}>Voltar</button>

             {topsRepositorios?.map((evt:repositorios)=>[
    
    
                <div key={evt.id} className="divRepositorios">
                    <h2>{evt.name}</h2>
                    <h3>{'</>'} {evt.language}</h3>
                    <div className="StarFork">
                        <div className="divEstrela">
                            <p>{evt.stargazers_count}</p>
                            <p className="pEstrela">⭐</p>
                        </div>
    
                        <div className="divForks">
                            <p>{evt.forks}</p>
                            <p className="pForks">♆</p>
                        </div>
                    </div>
    
                    <button className="btn" onClick={()=> directPages(evt)}>Ver codigo</button>
                </div>
            ])} 
        </section>
      )
   
}

export default Repositorios