import axios from "axios"
import {useState } from "react"
import ShowConta from "./ShowConta"
import { sertch } from "../Types/sertch"


const Sertch = ({conta, setConta, setShowSertch}:sertch) => {
    const [nome, setNome] = useState<string>('')
    const [erro, setErro] = useState<string | unknown>('a')

    const headSubmit = (evt:React.FormEvent)=>{
        evt.preventDefault()
           
            const getConta = async ()=>{
                try {
                    const response = await axios.get(`https://api.github.com/users/${nome}`)
                    console.log(response.data)
                    setConta(response.data)
                } catch (error) {
                    setErro(error)
                    setConta('')
                }
            }
            
            getConta()    


    }

    return (
        <section id="sectionSertch">

            <div id="divSertch">
                <h2>Busque por um usuario:</h2>
                <p>conheça seus melhores repositórios</p>
                <form id="formSertch" onSubmit={headSubmit}>
                    <input 
                    type="text"
                    value={nome}
                    onChange={(evt:React.ChangeEvent<HTMLInputElement>)=>{setNome(evt.target.value)}}
                    />

                    <button type="submit">🔎</button>
                </form>
            </div>

            
            {conta != ''?<ShowConta conta={conta} setShowSertch={setShowSertch}/>: erro === 'a' ? '': <h2>Conta não encontrada...</h2>}
        </section>
  )
}

export default Sertch