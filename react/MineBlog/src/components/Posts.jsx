import style from './Posts.module.css'
import { useNavigate, Link } from 'react-router-dom'
import {useAuthValue} from '../context/AuthContext'

const Posts = ({posts}) => {
  const navigate = useNavigate()  
  const {user} = useAuthValue()
  let uid
  if(user){
  uid = user.uid
  }

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
                <div className={style.divBtn}>
                  <button onClick={()=> navigate(`/post/${e.id}`)} className={style.btn}>Ver</button>
                  {uid && uid === e.uid && <button onClick={()=> navigate(`/post/edit/${e.id}`)} className={style.btn}>Editar</button>}
                </div>
            </div>
        ])}
    </section>
  )
}

export default Posts