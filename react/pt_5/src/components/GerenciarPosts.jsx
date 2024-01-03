import {useState, useEffect} from 'react'
import axios from 'axios'

const GerenciarPosts = () => {
    
    const [post, setPost] = useState([])
    const [erro, setErro] = useState('')

    useEffect(()=>{

        const fetchPosts = async ()=>{

            try {   
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPost(response.data)

            } catch (error) {
                setErro(erro.message)
            }

        }

        fetchPosts()

    })

    return (
    <div>
        <h2>geranciar</h2>
        {(post.map((posts)=>[
            <div key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
            </div>
        ]))}
       
    </div>
  )
}

export default GerenciarPosts