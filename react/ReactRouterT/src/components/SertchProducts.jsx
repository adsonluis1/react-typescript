import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SertchProducts = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const headleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/sertch?name=${query}`)
    } 

    return (
    <form onSubmit={(e)=>headleSubmit(e)}>
        <input 
        type="text"
        placeholder='digite aqui...'
        onChange={(e)=> setQuery(e.target.value)}
        />
        <input type="submit" value="pesquisar" />
    </form>
  )
}

export default SertchProducts