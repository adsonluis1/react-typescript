import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthenticator } from '../hooks/useAuthenticator'
import { useAuthValue } from '../context/AuthContext'


const NavBar = () => {
  const {user} = useAuthValue()
  const { logout } = useAuthenticator()
  return (
    <nav>
          <NavLink to={'/'}>Home</NavLink>
          {!user &&
          <>
          <NavLink to={'/login'}>Entrar</NavLink>
          <NavLink to={'/cadastro'}>Cadastrar</NavLink>
          </>}
          {user &&
          <>
          <NavLink to={'/posts/create'}>Novo post</NavLink>
          <NavLink to={'/dashbord'}>Dashbord</NavLink>
          </>
          }
          <NavLink to={'/sobre'}>Sobre</NavLink>
          {user &&
          <button onClick={logout}>Sair</button>
          }
    </nav>
  )
}

export default NavBar