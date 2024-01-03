import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
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
     </ul>

     <Routes>
         <Route path='/FetchPosts' element={<FetchPosts />}/>
         <Route path='/' element={<Inicio />}/>
      </Routes>


   </div>
  )
}
import { Form } from 'react-router-dom'
import Inicio from './components/Inicio'


export default App
