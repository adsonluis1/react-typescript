import React, { useCallback, useEffect, useState } from 'react'
import CardPosts from '../components/CardPosts'

const UseMemo = () => {
    const [posts, setPosts] = useState([])
    const [query , setQuery] = useState('')
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(()=>{
        const handleApi = async ()=>{
            try {
                const data = await fetch(url)
                const posts = await data.json() 
                setPosts(posts)
            } catch (error) {
                alert('error in fetch')
                console.log(error.massage)
            }
        }

        handleApi()
    },[])
    return (
    <section>
        <h1>use Memo</h1>

        <input 
        type="search"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}

        />
        
        {useCallback(posts.length > 0 ? 
        <CardPosts posts={posts}/>
        :
        <p>Carregando Posts</p>,[posts])    
        }
    </section>
  )
}

export default UseMemo