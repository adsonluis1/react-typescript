import { useState } from 'react'
import styles from './CreateStyle.module.css'
import { UseInsertDocument } from '../../hooks/useInsertDocument'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [tag, setTag] = useState([])
  const [formError, setFormError] = useState('')
  
  const {user} = useAuthValue() 
  const {insertDocument, response} = UseInsertDocument('posts')

  const handleSubmit = (evt)=>{
    evt.preventDefault()
    setFormError('')

    insertDocument({
      title,
      urlImg,
      conteudo,
      tag,
      uid:user.uid,
      createdBy: user.nome
    })
    console.log(response)
  }
  return (
    <section>
      <h1>Criar post</h1>
      <h2>Escreva sobre o que quiser e compartilhe o seu conhecimento</h2>

      <form className={styles.form} onSubmit={(evt)=>handleSubmit(evt)}>
        <label htmlFor="title">Título:</label>
        <input 
        type="text" 
        id="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}      
        />

        <label htmlFor="urlImg">URL da imagem:</label>
        <input 
        type="text" 
        id="urlImg" 
        value={urlImg}
        onChange={(e)=> setUrlImg(e.target.value)}
        />
        <label htmlFor="conteudo">Conteúdo:</label>
        <input 
        type="text" 
        id="conteudo" 
        value={conteudo}
        onChange={(e)=>setConteudo(e.target.value)}
        />

        <label htmlFor="tag">Tags:</label>
        <input 
        type="text" 
        id="tag" 
        value={tag}
        onChange={(e)=> setTag(e.target.value)}
        />

            {!response.loading && <input type="submit" value="Postar" />}
            {response.loading && <button disabled>...aguarde</button>}
            {response.error && <p className='pError'>{response.error}</p>}
      </form>
    </section>
  )
}

export default CreatePost