// css
import styles from './PostP.module.css'
// hooks
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const PostP = () => {
    const { id } = useParams()
    const {document:post,error, loading} = useFetchDocument('posts', id)
    
    const navigate = useNavigate()

    return (
        <section className={styles.section}>
            {post && post.length === 0 &&
                 <>       
                <h1>Houve um erro retorne para a home</h1>
                <p>{error}</p>
                </>
                }
           {post &&
           <div className={styles.filha}>
               <h1 className={styles.h1}>{post.title}</h1>
                 <img className={styles.img} src={post.urlImg} alt={`img de ${post.title}`}/>
                 <p className={styles.descricao}>{post.conteudo}</p>
                 <p className={styles.p}>Criado por: {post.createdBy}</p>
                 <div>
                     {post.tag.map(e => <span> <b>#</b>{e}</span>)}
                 </div>
           </div>}
           <button onClick={()=> navigate('/')} className={styles.btn}>Voltar</button>
        </section>
  )
}

export default PostP