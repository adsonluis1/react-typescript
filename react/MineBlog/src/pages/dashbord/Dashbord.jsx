//style
import styles from  './Dashbord.module.css'
// hooks
import { useAuthValue } from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'
import { useNavigate }from 'react-router-dom'
import { useDeleteDocument } from '../../hooks/useExcluirDoc'

const Dashbord = () => {
  const {user} = useAuthValue()
  const uid = user.uid
  const navigate = useNavigate()
  const {deleteDocument} = useDeleteDocument('posts')

  const {documents:posts, loading} = useFetchDocuments('posts',null, uid)

  return (
    <section className={styles.section}>
      {posts && posts.length === 0?
      <div className={styles.div}>
          <h1>Ainda não tem posts 😞</h1>
          <button className={styles.btn} onClick={()=> navigate('/posts/create')}>Faça seu post</button>
      </div> 
      :
      <div>

          <div className={styles.divTitle}>
             <h1>DashBord</h1>
             <h2>Gerenciador de posts</h2>
          </div>

          <p className={styles.pMain}>Título</p>

         {posts && posts.map((post)=>[
           <div key={post.id}>
          
           <div className={styles.divNav}>
               <div className={styles.divP}>
                 <p>{post.title}</p>
               </div>
 
               <nav className={styles.nav}>
                 <button onClick={()=> navigate(`/post/${post.id}`)}>Ver</button>
                 <button onClick={()=> navigate(`/post/edit/${post.id}`)}>Editar</button>
                 <button className={styles.delete} onClick={()=> deleteDocument(post.id)}>Excluir</button>
               </nav>
           </div>
       </div>
         ])}
      </div>
     
     
      }
    </section>
  )
}

export default Dashbord