import './App.css'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Login from './pages/login-cadastro/Login.jsx'
import Cadastrar from './pages/login-cadastro/Cadastrar.jsx'
import NavBar from './components/NavBar'
import { useAuthenticator } from './hooks/useAuthenticator'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {AuthProviber} from './context/AuthContext.jsx'
import Dashbord from './pages/dashbord/Dashbord.jsx'
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/about/About.jsx'

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
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={!user? <Login/>: <Navigate to='/'/>}/>
          <Route path='/cadastro' element={!user? <Cadastrar/>: <Navigate to='/'/>} />
          <Route path='/sobre' element={<About />} />
          <Route path='/dashbord' element={user? <Dashbord/>: <Navigate to='/login'/>}/>
          <Route path='/posts/create' element={user? <CreatePost/>: <Navigate to='/login'/>}/>
        </Routes>
        {/* <Home /> */}
      </AuthProviber>
    </>
  )
}

export default App
