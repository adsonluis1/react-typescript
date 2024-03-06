import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Seartch from '../seartch/Seartch'
import style from './Header.module.css'

const Header = () => {
  return (
    <header>
        <h1><NavLink to={'/'}>FilmVerse</NavLink></h1>
        <Seartch/>
    </header>
  )
}

export default Header