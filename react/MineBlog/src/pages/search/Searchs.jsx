import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import  useQuery  from '../../hooks/useQuery'
import { useNavigate } from 'react-router-dom'
import Posts from '../../components/Posts'
import styles from './Search.module.css'

const Searchs = () => {
  const url = useQuery()
  const query=url.get('q')
  const {documents:posts, error} = useFetchDocuments('posts', query)
  const navigate = useNavigate()
  console.log(posts)
  return (
    <section className={styles.section}>
        {error && <h2>{error}</h2>}
        {posts && 
        <Posts posts={posts} />}
        {posts && posts.length === 0 &&
        <div className={styles.filha}>
          <h1>Ops, parace que não tem nenhum post com essa tag 🥺</h1>
          <button className={styles.btn} onClick={()=>navigate('/posts/create')}>Criar seu post</button>
        </div>}
    </section>
  )
}

export default Searchs