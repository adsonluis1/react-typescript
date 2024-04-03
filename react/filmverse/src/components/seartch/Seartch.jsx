import React, { useState, useEffect } from 'react'
import style from './Seartch.module.css'
import { useNavigate } from 'react-router-dom'


const Seartch = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/flme/${query}`)
        setQuery('')
    } 

    return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Filme que deseja...'
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        />

        <input type="submit" value="🔎" />
    </form>
  )
}

export default Seartch