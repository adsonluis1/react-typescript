import {useState, useEffect} from 'react'
import axios from 'axios'
import AddPosts from './AddPosts'


const GerenciarPosts = () => {
    
    const [post, setPost] = useState([])
    const [erro, setErro] = useState('')
    const [edit, setEdit] = useState(false)
    const [select, setSelect] = useState('')


    const addNewPost = (posts, funck)=>{
        if(funck === 'add'){
            setPost((evt) => [posts, ...evt])
        }else if(funck === 'edit'){
            setPost((evt) => evt.map((p)=> p.id === posts.id ? posts : p))
        }
    }

    useEffect(()=>{

        const fetchPosts = async ()=>{

            try {   
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPost(response.data.slice(0,5))
                console.log(response.data)

            } catch (error) {
                setErro(erro.message)
            }

        }

        fetchPosts()

    },[])

    const handleEdit = (posts) => {
        console.log(posts)
        setSelect(posts)
        setEdit(true)
    }

    const handleCancelEdit = (posts) => {
        setSelect('')
        setEdit(false)
    }

    return (
    <div>
        <h2>geranciar</h2>
        <AddPosts posts= {edit ? select : ''}
        addNewsPosts={addNewPost}
        />
        {edit && <button onClick={handleCancelEdit}>Cancelar edit</button>}
        {erro ? (<p>erro: {erro}</p>) : ((post.map((posts)=>[
            <div key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
                <button 
                onClick={(evt)=>{
                   handleEdit(posts)
                }}
                >editar</button>
                       
            </div>
        ])))}
       
    </div>
  )
}

export default GerenciarPosts