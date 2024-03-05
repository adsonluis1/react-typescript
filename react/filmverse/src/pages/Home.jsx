import React, { useEffect, useState } from 'react'
const filmes = import.meta.env.VITE_GET_FILMES
const filmesIMG = import.meta.env.VITE_IMG

const Home = () => {
    const [topFilmes, setTopFilmes] = useState([])

  useEffect(()=>{
    const getFilmes = async ()=>{
      try {
        const options ={
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVjY2ExYTM3MDlhZDlkYTg1YmFjMzBmYmRlNDdlMiIsInN1YiI6IjY1ZTZmYTJjMGQxMWYyMDE4NjZkMzJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pDtrXRJcGbQaSFKBrEEC_mnzS-KMioRU59fXaWPLFc'}}
        
        const res = await fetch(filmes,options)
        const response = await res.json()
        response.results.sort((a,b)=> b.vote_average - a.vote_average)
        setTopFilmes(response.results)
      } catch (error) {
        console.log(error)
      }
     
    }
    getFilmes()
  },[])

  console.log(topFilmes)
    return (
    <section>
        {topFilmes.length === 0 && <p>carregando</p>}
        {topFilmes.length > 0 && 
        topFilmes.map((filmes)=>[
            <div key={filmes.id}>
                <h2>{filmes.title}</h2>
                <h3>⭐{filmes.vote_average}</h3>
                <img src={filmesIMG + filmes.poster_path} alt="" />
                <p>Descrição: {filmes.overview}</p>
                <p>Lançado em: {filmes.release_date.split('-').join('/')}</p>
            </div>
        ])
        }
    </section>
  )
}

export default Home