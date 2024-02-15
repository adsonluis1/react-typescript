import './App.css'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Login from './pages/login-cadastro/Login.jsx'
import Cadastrar from './pages/login-cadastro/Cadastrar.jsx'
import NavBar from './components/NavBar'
import { useAuthenticator } from './hooks/useAuthenticator'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {AuthProviber} from './context/AuthContext.jsx'

function App() {
  const navigate = useNavigate('')

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthenticator()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })

  },[auth])

  if(loadingUser){
    return <p>carregando...</p>
  }
  return (
    <>
    <AuthProviber value={{user}}>
        <header>
          <h1 onClick={()=> navigate('/')}><span>Mini</span> Blog</h1>
          <NavBar />
        </header>

        <Routes>
          <Route path='/'/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastrar />} />
          <Route path='/sobre' element={''} />
        </Routes>
      </AuthProviber>
    </>
  )
}

export default App
