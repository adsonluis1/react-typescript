import style from './Posts.module.css'
import { useNavigate, Link } from 'react-router-dom'

const Posts = ({posts}) => {
  const navigate = useNavigate()  
  return (
    <section>
        {posts.map((e)=>[
            <div className={style.divPai} key={e.id}>
                <img className={style.img} src={e.urlImg} alt={`imagem sobre ${e.title}`} />
                <h2 className={style.h2}>{e.title}</h2>
                <p className={style.criador}>Criado por: {e.createdBy}</p>
                <div className={style.divTags}>
                {e.tag.map((tags)=> <span key={Math.floor(Math.random()*1000000000)}> <b>#</b>{tags}</span>)}
                </div>
                <button onClick={()=> navigate(`/post/${e.id}`)} className={style.btn}>Ver</button>
            </div>
        ])}
    </section>
  )
}

export default Posts