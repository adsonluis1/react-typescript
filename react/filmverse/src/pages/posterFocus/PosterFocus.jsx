import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './PosterFocus.module.css'

const urlGetFilme = import.meta.env.VITE_SEARTCH_FILMES
const filmesIMG = import.meta.env.VITE_IMG

const PosterFocus = () => {
    const {id} = useParams()
    const {query} = useParams()
    const [focusMovie, setFocusMovie] = useState('')
    
    useEffect(()=>{
        const getFilme = async ()=>{
            try {
                const options ={
                  method: 'GET',
                  headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVjY2ExYTM3MDlhZDlkYTg1YmFjMzBmYmRlNDdlMiIsInN1YiI6IjY1ZTZmYTJjMGQxMWYyMDE4NjZkMzJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pDtrXRJcGbQaSFKBrEEC_mnzS-KMioRU59fXaWPLFc'}
                  }
                const res = await fetch(`${urlGetFilme}=${query}`,options)
                const data = await res.json()
                setFocusMovie(data.results.filter((filme)=> filme.id ==id))
              } catch (error) {
                console.log(error)
              }
        }
        getFilme()
    },[])

    return (
    <section>
        {focusMovie.length >= 1 && focusMovie.map((filme)=>[
            <div className={style.div} key={filme.id}>
            <img src={filmesIMG + filme.poster_path} alt='Poster do filme' />
            <div className={style.info}>
                <h2>{filme.title}</h2>
                <h3>⭐{filme.vote_average.toFixed(2)}</h3>
                <p>Descrição: {filme.overview}</p>
                <p><b>Lançado em: {filme.release_date.split('-').reverse().join(' / ')}</b></p>
            </div>
        </div>
        ])}
    </section>
  )
}

export default PosterFocus