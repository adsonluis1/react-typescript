import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, NavLink} from 'react-router-dom'
import Inicial from './components/Inicial'
import Saindo from './components/Saindo'
import Conteudo from './components/Conteudo'
import Conetudo2 from './components/Conteudo2'
import Login from './components/Login'
import Dashbord from './components/Dashbord'
import Perfil from './components/Perfil'
import Config from './components/Config'
import Tarefas from './components/Tarefas'
import Teste from './components/Teste'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>inicio</Link>
          </li>
          <li>
            <Link to='/conteudo'>conteúdo</Link>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'clicked' : '')} to='/conteudo2'>conteúdo secundario</NavLink>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/dashbord'>Dashbord</Link>
          </li>
          <li>
            <Link to='/exit'>sair</Link>
          </li>
          <li>
            <Link to='/Teste'>Teste</Link>
          </li>
        </ul>

        <div>
          <h2>tarefas</h2>
          <ul>
            <li>
              <Link to='/tarefa/1'>tarefa 1</Link>
            </li>
            <li>
              <Link to='/tarefa/2'>tarefa 2</Link>
            </li>
            <li>
              <Link to='/tarefa/3'>tarefa 3</Link>
            </li>
          </ul>
        </div>
      </nav>
  
      <Routes>
          {/* route normal */}
          <Route path='/' element={<Inicial />}/>
          <Route path='/conteudo' element={<Conteudo/>}/>
          <Route path='/exit' element={<Saindo/>}/>
          <Route path='/conteudo2' element={<Conetudo2 />} />
          <Route path='/login' element={<Login />} />
          {/* route dinamica */}
          <Route path='/tarefa/:taskId' element={<Tarefas />} />

          {/* route  aninhada*/}
          <Route path='/dashbord' element={<Dashbord />}>
            <Route path='perfil' element={<Perfil />} />
            <Route path='config' element={<Config />} />
          </Route>
          <Route path='/Teste' element={<Teste />} />
      </Routes>
    </>
  )
}

export default App
