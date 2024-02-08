import { useEffect} from 'react'
import {Link} from 'react-router-dom'
const Home = ({setProdutos, produtos,url}) => {
 
  
  useEffect(()=>{
    const getProduct = async ()=>{
      const res = await fetch(url)
      const data = await res.json()

      setProdutos(data)
    }
    getProduct()
  },[])
  
  return (
    <>
    <h1>Seja bem vindo</h1>
    
    <div id='divProdutos'>
            {produtos && produtos.map((produto)=>[
                <ul key={produto.id}>
                    <h1>{produto.name}</h1>
                    <h2>R$ {produto.price}</h2>
                    <Link to={`/produtos/${produto.id}`}>Detalhes</Link>
                </ul>
            ])}
      </div>   
    </>
  )
}

export default Home