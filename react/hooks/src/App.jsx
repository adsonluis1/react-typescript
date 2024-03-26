import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import {SomeContext } from './components/HookUseContext'
import { useContext } from 'react'
import Testes from './pages/Testes'
import UseMemo from './pages/UseCallback'

function App() {
  
  const {contextValue} = useContext(SomeContext)
  console.log(contextValue)
  return (
    
      <section>
       
        <NavLink to={'/'}>Home</NavLink>
        <br/>
        <NavLink to={'/about'}>About</NavLink>
        <br />
        <NavLink to={'/teste'}>Testes</NavLink>
        <br />
        <NavLink to={'/useCallback'}>useCallback</NavLink>
     
        
        

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/teste' element={<Testes />}/>
        <Route path='/useCallback' element={<UseMemo />}/>
      </Routes>
     
      </section>

     
    
  )
}

export default App
