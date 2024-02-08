import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Sertch = () => {
  const [sertchParams] = useSearchParams()
  const url = `http://localhost:3000/producrs?${sertchParams}`
  const [produto, setProduto] = useState('')
  useEffect(()=>{
    const getElements = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setProduto(data)
    }
    getElements()
  },[sertchParams])

  return (
  <>
  <h1>Resultado</h1>
   <div id='divProdutos'>
    {produto && produto.map((produto)=>[
        <ul key={produto.id}>
            <h1>{produto.name}</h1>
            <h2>R$ {produto.price}</h2>
        </ul>
    ])}
    </div>
  </>
      
  )
}

export default Sertch