import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthenticator } from '../hooks/useAuthenticator'
import { useAuthValue } from '../context/AuthContext'


const NavBar = () => {
  const {user} = useAuthValue()

  return (
    <nav>
          <NavLink to={'/'}>Home</NavLink>
          {user &&
          <>
          <NavLink to={'/login'}>Entrar</NavLink>
          <NavLink to={'/cadastro'}>Cadastrar</NavLink>
          </>}
         
          <NavLink to={'/sobre'}>Sobre</NavLink>
    </nav>
  )
}

export default NavBar