import axios from "axios"
import {useEffect, useState } from "react"
import { repositorios } from "../Types/repositorios"
const Teste = () => {
    const [repositorio, setRepositorio] = useState<repositorios[]>()
    let index:number
    let newArr:repositorios[] = []
    const [topsRepositorios, setTopsRepositorios] = useState<repositorios[]>([])

    useEffect(()=>{

        const heandApi = async ()=>{

           try {
            const response = await axios.get(`https://api.github.com/users/matheusbattisti/repos`)
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


        topsRepositorios!.map((evt)=>{
            console.log(evt)
        })
    return (
        <section id="sectionRepositorio">
    
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
                       <p>0</p>
                       <p className="pForks">♆</p>
                   </div>
               </div>

               <button>Ver codigo</button>
           </div>
       ])} 
   </section>
    )
}
export default Teste