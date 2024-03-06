import React from 'react'
import style from './Poster.module.css'
import { useNavigate } from 'react-router-dom'
const filmesIMG = import.meta.env.VITE_IMG

const Poster = ({topFilmes}) => {
  const navigate = useNavigate()

  return (
    <section className={style.sec}>
    {topFilmes && topFilmes.length === 0 && <p>carregando</p>}
    {topFilmes && topFilmes.length > 0 && 
    topFilmes.map((filme)=>[
        <div className={style.div} key={filme.id}>
            <img src={filmesIMG + filme.poster_path} alt='Poster do filme' />
            <div className={style.info}>
                <h2>{filme.title}</h2>
                <h3>⭐{filme.vote_average.toFixed(2)}</h3>
                <p>Lançado em: {filme.release_date.split('-').reverse().join(' / ')}</p>
            </div>
            <button onClick={()=> navigate(`/filme/${filme.id}/${filme.title}`)} className={style.btn}>Detalhes</button>
        </div>
    ])
    }
    </section>
  )
}

export default Poster