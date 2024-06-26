import './App.css'
import {Link,Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import About from '../pages/About'
import { useState } from 'react'
import Sertch from '../pages/Sertch'
import SertchProducts from './components/SertchProducts'

function App() {
  const [produtos, setProdutos] = useState('')
  const url = 'http://localhost:3000/producrs'
  return (
    <>
        <header>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>Sobre</Link>
            <Link to={'/produtos'}>Produtos</Link>
          </nav>
         <SertchProducts />
        </header>
       

        <Routes>
          <Route path='/' element={<Home setProdutos={setProdutos} produtos={produtos} url={url}/>}/>  
          <Route path='/about' element={<About />} />
          <Route path='/produtos/:id' element={<Produtos url={url}/>}/>
          <Route path='/sertch' element={<Sertch />}/>
        </Routes>

       
    </>
  )
}

export default App
