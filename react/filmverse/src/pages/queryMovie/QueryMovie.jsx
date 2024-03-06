import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import Poster from '../../components/poster/Poster'
const seartchFilmes = import.meta.env.VITE_SEARTCH_FILMES

const QueryMovie = () => {
    const {query} = useParams()
    const [queryMovies, setQueryMovies] = useState([])
    const seartch = async ()=>{
        
        try {
          const options ={
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVjY2ExYTM3MDlhZDlkYTg1YmFjMzBmYmRlNDdlMiIsInN1YiI6IjY1ZTZmYTJjMGQxMWYyMDE4NjZkMzJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pDtrXRJcGbQaSFKBrEEC_mnzS-KMioRU59fXaWPLFc'}
            }
          const res = await fetch(`${seartchFilmes}=${query}`,options)
          const data = await res.json()
          data.results.sort((a,b)=> b.vote_average- a.vote_average)
        setQueryMovies(data.results)
        } catch (error) {
          console.log(error)
        }}

        seartch()
    return (
    <>
      <Poster topFilmes={queryMovies} />
    </>
  )
}

export default QueryMovie