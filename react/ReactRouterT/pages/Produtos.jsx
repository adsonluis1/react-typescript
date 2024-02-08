import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
const Produtos = ({produtos}) => {
  let { id } = useParams()
  const [produto] = useState(produtos.filter((e)=> e.id == id))
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