import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
const Produtos = ({url}) => {
  let { id } = useParams()
  const [produto, setProduto] = useState('')

  useEffect(()=>{
    const getOne = async ()=>{
      const response = await fetch(url)
      const data = await response.json()
      setProduto(data.filter((e)=> e.id == id))
    }
    getOne()
  })

  return (
    <div>
         <div id='divProdutos'>
            {produto && produto.map((produto)=>[
                <ul key={produto.id}>
                    <h1>{produto.name}</h1>
                    <h2>R$ {produto.price}</h2>
                </ul>
            ])}
      </div>   
    </div>
  )
}

export default Produtos