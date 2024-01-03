import { useEffect, useState } from "react"

const FetchPosts = () => {

    const [post, setPost] = useState([])
    const [erro, setErro] = useState('')

    useEffect(()=>{

        const fetchPosts = async ()=>{

            try {   
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json()
                setPost(data)

            } catch (error) {
                setErro(erro.message)
            }

        }

        fetchPosts()

    })

  return (
    <div>
        <h1>Fetch</h1>
        {erro ? (
            <p>error: {erro}</p>
        ) : (post.map((posts)=>[
            <div key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
            </div>
    ]))}
    </div>
  )
}

export default FetchPosts