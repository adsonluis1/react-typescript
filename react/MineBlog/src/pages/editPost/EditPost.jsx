import styles from './EditPost.module.css'
// hooks
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import {useFetchDocument} from '../../hooks/useFetchDocument'
import { useEditingDoc } from '../../hooks/useEditingDoc';

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [tag, setTag] = useState([]);
    const [Error, setError] = useState("");
    const { user } = useAuthValue();
    const {id} = useParams()
    let formError = ''
    const {document:post, error, loading} = useFetchDocument('posts', id)
    
    const { editDocument, response } = useEditingDoc("posts");

    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      formError = "";
  
      // validate image
      try {
        new URL(urlImg);
      } catch (error) {
        formError = "A imagem precisa ser uma URL.";
      }
  
      // // create tags array
      const tagsArray = tag.split(",").map((tags) => tags.trim().toLowerCase());
  
      // // check values
      if (!title || !urlImg || !tag || !conteudo) {
        formError = "Por favor, preencha todos os campos!";
      }
  
      setError(formError)
      if(formError) return
      
      const data = {
        title,
        urlImg,
        conteudo,
        tag: tagsArray,
        uid: user.uid,
        createdBy: user.displayName
      }

      editDocument(id, data);
  
      // redirect to home page
      navigate("/dashbord");
    }

    useEffect(()=>{
        if(post){
        setTitle(post.title)
        setUrlImg(post.urlImg)
        setConteudo(post.conteudo)
        setTag(post.tag.join(', '))
        }
    },[post])
    return (
        <section className={styles.section}>
        <h1>Editando post</h1>
        <h2>Se deseja mudar qualquer informação do seu post, aqui é o lugar certo</h2>
  
        <form className={styles.form} onSubmit={(evt)=>handleSubmit(evt)}>
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          id="title" 
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          required     
          placeholder='Pense em um titulo para o post...' 
          />
  
          <label htmlFor="urlImg">URL da imagem:</label>
          <input 
          type="text" 
          id="urlImg" 
          value={urlImg}
          onChange={(e)=> setUrlImg(e.target.value)}
          required
          placeholder='Url da imagem desejada'
          />
          <label htmlFor="conteudo">Conteúdo:</label>
          <input 
          type="text" 
          id="conteudo" 
          value={conteudo}
          placeholder='Insira um conteúdo criativo...'
          onChange={(e)=>setConteudo(e.target.value)}
          required
          />
  
          <label htmlFor="tag">Tags:</label>
          <input 
          type="text" 
          id="tag" 
          value={tag}
          placeholder='Ex: js, web, programação'
          onChange={(e)=> setTag(e.target.value)}
          required
          />
  
              {!response.loading && <input className={styles.submit} type="submit" value="Postar" />}
              {response.loading && <button className={styles.submit} disabled>...aguarde</button>}
              {Error && <p className='pError'>{Error}</p>}
              {response.error && <p className='pError'>{response.error}</p>}
        </form>
         
      </section>
  )
}

export default EditPost