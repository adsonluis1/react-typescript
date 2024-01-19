import axios from "axios"
import {useEffect, useState } from "react"
import { repositorios } from "../Types/repositorios"
const Teste = () => {
    const [repositorio, setRepositorio] = useState<[repositorios]>()
    let index:number
    let newArr:repositorios[] = []
    const [topsRepositorios, setTopsRepositorios] = useState<[repositorios] | []>([])

    useEffect(()=>{

        const heandApi = async ()=>{

           try {
            const response = await axios.get(' https://api.github.com/users/matheusbattisti/repos')
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
                await repositorio!.map((evt:repositorios)=>{
                    if(evt.stargazers_count > newArr[n].stargazers_count){
                        newArr.splice(parseInt(n),1,evt)
                        index = repositorio!.indexOf(evt)
                    }
                })
                
                repositorio!.splice(index!,1)
        }

       for(var n in newArr){
           
            newArr.splice(1,1)
            newArr.splice(3,1)
            console.log(newArr[n])
       }
          
    }
    filter()

    
    return (
        ''
    )
}
export default Teste