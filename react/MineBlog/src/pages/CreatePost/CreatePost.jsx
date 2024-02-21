import styles from './CreateStyle.module.css'
import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [tag, setTag] = useState([]);
  const [Error, setError] = useState("");
  const { user } = useAuthValue();
  let formError = ''

  const { insertDocument, response } = useInsertDocument("posts");

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
    
    insertDocument({
      title,
      urlImg,
      conteudo,
      tag: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });

    // redirect to home page
    // navigate("/");
  };
  return (
    <section className={styles.section}>
      <h1>Criar post</h1>
      <h2>Escreva sobre o que quiser e compartilhe o seu conhecimento</h2>

      <form className={styles.form} onSubmit={(evt)=>handleSubmit(evt)}>
        <label htmlFor="title">Título:</label>
        <input 
        type="text" 
        id="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required     
        placeholder='Pesne em um titulo para o post...' 
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

export default CreatePost