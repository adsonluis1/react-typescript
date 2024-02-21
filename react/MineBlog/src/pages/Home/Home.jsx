import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const [query, setQuery] = useState('')
  const [posts] = useState([])
  const navigate = useNavigate()

  return (
    <section>
       <h1>Veja os posts mais recentes</h1>
       <form className={styles.form}>
          <input 
          type="text"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder='Ou pesquise por um tag desejada'
          />
          <input className={styles.input} type="submit" value="Pesquisar" />
       </form>

      {posts.length == 0 | !posts && 
      <div>
        <p>ainda não temos posts, seja o primeiro a criar</p>
        <button onClick={()=> navigate('/posts/create')}>Crie seu post</button>
      </div>}
    </section>
  )
}

export default Home