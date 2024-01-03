import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import GerenciarPosts from './components/GerenciarPosts'
import { Form } from 'react-router-dom'
import Inicio from './components/Inicio'

function App() {
  return (
   <div>
    
     <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
     
      <li>
        <Link to='/FetchPosts'>Fetch</Link>
      </li>

      <li>
        <Link to={'/AxiosPosts'}>Axios</Link>
      </li>

      <li>
        <Link to={'/GerenciarPosts'} >Gerenciar Posts</Link>
      </li>
     </ul>

     <Routes>
         <Route path='/FetchPosts' element={<FetchPosts />}/>
         <Route path='/' element={<Inicio />}/>
         <Route path='/AxiosPosts' element={<AxiosPosts/>}/>
        <Route path='/GerenciarPosts' element={<GerenciarPosts />} />
      </Routes>


   </div>
  )
}





export default App
