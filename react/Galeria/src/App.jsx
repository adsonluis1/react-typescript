import BarraDeBusca from './components/BarraDeBusca'
import Galeria from './components/Galeria'
import ImgSelect from './components/ImgSelect'
import axios from 'axios'
import './index.css'
import { useEffect, useState } from 'react'

function App() {
  const [query , setQuery] = useState('')
  const [categoria , setCategoria] = useState('')
  const [fotos, setFotos] = useState([])
  const [selectImg, setSelectImg] = useState(null)
  const [selectBarraDeBusca, setSelectBarraDeBusca] = useState(null)

  const feacthData = async (query, categoria)=>{
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

  if(query || categoria){
    let procura = null
    if(query){
      procura = query
    }else if(query && categoria){
      procura= `${query} ${categoria}`
    }else if(categoria){
      procura = categoria
    }

    const response = await axios.get(`https://api.unsplash.com/search/photos`,{
      params:{
        client_id: apiKey,
        query: procura
      }
    })

    setFotos(response.data.results)
    return
  }
    
    
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params:{
        client_id: apiKey,
        count:10
      }
    })
    setFotos(response.data)
  }

  useEffect(()=>{
    feacthData(query,categoria)
  },[])

  useEffect(()=>{
    feacthData(query, categoria)
    setSelectBarraDeBusca(null)
  },[selectBarraDeBusca])

  return (
    <div className='container'>
      <BarraDeBusca 
      setQuery={setQuery} 
      setCategoria={setCategoria} 
      setSelectBarraDeBusca={setSelectBarraDeBusca}/>

      <Galeria fotos={fotos} setSelectImg={setSelectImg}/>
      {selectImg && (
        <ImgSelect foto={selectImg} setFoto={setSelectImg}/>
      )}   
    </div>
  )
}

export default App
