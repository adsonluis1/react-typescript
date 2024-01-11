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

  const feacthData = async (query, categoria)=>{

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params:{
        client_id: apiKey,
        count:10
      }
    })
    setFotos(response.data)

    console.log(response.data)
  }

  useEffect(()=>{
    feacthData(query,categoria)
  },[])

  return (
    <div className='container'>
      <BarraDeBusca />
      <Galeria fotos={fotos} setSelectImg={setSelectImg}/>
      {selectImg && (
        <ImgSelect foto={selectImg} setFoto={setSelectImg}/>
      )}   
    </div>
  )
}

export default App
