import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const url = 'http://localhost:3000/producrs'
  const [produtos, setProdutos] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  // fetch - get
  useEffect(()=>{
      const getProduts = async ()=>{
      const response = await fetch(url)
      const data = await response.json()
      setProdutos(data)
      }
      getProduts()
  }
  ,[])

  // fetch - set
  const handSubmit= (e)=>{
    e.preventDefault()

    const product = {
      name,
      price
    }

    const setProdut = async ()=>{
         await fetch(url,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(product)
        })
    }
    setProdut()
    setProdutos((prev)=> [...prev, product])
  }

  // fetch - apagar
  const deleteProdut = async (id)=>{
    const urlDelete = `${url}/${id}`
    const response = await fetch(urlDelete,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    setProdutos(produtos.filter((e)=> e.id != id))
  } 

  return (
    <section>
        <div id="get">
          <h1>fetch - get</h1>
          <ul>
              {produtos && produtos.map((produto)=>[
                <li key={produto.id}>{produto.name} - R${produto.price}
                 <button onClick={()=>deleteProdut(produto.id)}>apagar</button>
                </li>
              ])}
          </ul>
        </div>

        <div id="set">
          <h1>fetch - set</h1>
          <p>digite o nome e o preço do produto que voce deseja adicionar, logo depois click no botão</p>
          <form onSubmit={(e)=> handSubmit(e)}>
              <label>
                nome
                <input 
                type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                />
              </label>

              <label>
                price
                <input 
                type="number"
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                max={10000}
                min={1}
                required
                />
              </label>

              <input type="submit" value="enviar" />
          </form>
        </div>

        <div id="delete">
          <h1>fetch - delete</h1>
          <p>para apagar o item desejado, click no botão apagar do lado do mesmo</p>
        </div>
    </section>
  )
}

export default App
