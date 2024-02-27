import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'
import Posts from '../../components/Posts'

const Home = () => {
  const [query, setQuery] = useState('')
  const {documents:posts, loading} = useFetchDocuments('posts')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(query)
    return navigate(`/search?q=${query.toLowerCase()}`)
  }
  return (
    <section onSubmit={handleSubmit} className={styles.section}>
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
        
      {!posts && 
      <div className={styles.aviso}>
        <p>ainda não temos post 🥺, seja o primeiro a criar</p>
        <button className={styles.btn} onClick={()=> navigate('/posts/create')}>Crie seu post</button>
      </div>}

      {posts && <Posts posts={posts}/> }
    
    </section>
  )
}

export default Home