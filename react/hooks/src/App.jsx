import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import {SomeContext } from './components/HookUseContext'
import { useContext } from 'react'


function App() {
  
  const {contextValue} = useContext(SomeContext)
  console.log(contextValue)
  return (
    
      <section>
       
        <NavLink to={'/'}>Home</NavLink>
        <br/>
        <NavLink to={'/about'}>About</NavLink>

     
        
        

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
     
      </section>

     
    
  )
}

export default App
