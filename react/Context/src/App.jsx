import './App.css'
import {Route, Routes, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
        <header>
          <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
          </nav>
        </header>

        <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
    </>
  )
}

export default App
