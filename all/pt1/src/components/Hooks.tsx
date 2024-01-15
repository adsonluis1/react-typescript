import {useState} from "react"

const Hooks = () => {
    const [num, setNum] = useState<number>(0)
    const [nome, setNome] = useState<string>('')
    
    const heandleSubmit = (evt:React.FormEvent)=>{
        evt.preventDefault()
        console.log('form enviado com sucesso')
    }
    
    return (
    <div>
        <p>quantidade de clicks: {num}</p>
        <button onClick={()=>{setNum(num + 1)}}>aumentar</button>
        
        <form onSubmit={heandleSubmit}>
            <input 
            type="text"
            value={nome}
            onChange={(evt:React.ChangeEvent<HTMLInputElement>)=>{
                setNome(evt.target.value)
            }}
            />

            <input 
            type="submit" 
            value="enviar" 
            />
        </form>

        {nome}

    </div>
  )
}

export default Hooks