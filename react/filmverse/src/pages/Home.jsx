import React, { useEffect, useState } from 'react'
import Poster from '../components/poster/Poster'
const filmes = import.meta.env.VITE_GET_FILMES


const Home = () => {
    const [topFilmes, setTopFilmes] = useState([])

    useEffect(()=>{
      const getFilmes = async ()=>{
    try {
        const options ={
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVjY2ExYTM3MDlhZDlkYTg1YmFjMzBmYmRlNDdlMiIsInN1YiI6IjY1ZTZmYTJjMGQxMWYyMDE4NjZkMzJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pDtrXRJcGbQaSFKBrEEC_mnzS-KMioRU59fXaWPLFc'}
          }
        const res = await fetch(filmes,options)
        const data = await res.json()
        data.results.sort((a,b)=> b.vote_average - a.vote_average)
        setTopFilmes(data.results)
      } catch (error) {
        console.log(error)
      }
     
    }
    getFilmes()
    },[])

  console.log(topFilmes)
    return (
    <main>
       <Poster topFilmes={topFilmes}/>
    </main>
  )
}

export default Home