import style from './Posts.module.css'

const Posts = ({posts}) => {
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
                <button className={style.btn}>Ver</button>
            </div>
        ])}
    </section>
  )
}

export default Posts