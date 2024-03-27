import React, { useCallback, useEffect, useRef, useState } from 'react'
import CardPosts from '../components/CardPosts'

const UseMemo = () => {
    const [posts, setPosts] = useState([])
    const [query , setQuery] = useState('')
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [filterPosts, setFilterPosts] = useState('')
    
    const handleChange = (e)=>{
        setQuery(e.target.value)
        setFilterPosts(posts)
        setFilterPosts((prev)=> prev.filter((a)=> a.title.includes(query)))
    }

    const filteredPost = query ? filterPosts : posts
   
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
    console.log('o pai renderizou')
    
    return (
    <section>
        <h1>use Memo</h1>

        <input 
        type="search"
        value={query}
        onChange={(e)=> handleChange(e)}
        />
        <p>tem {posts.length} posts</p>
        {query && <p>Tem {filterPosts.length} posts com <b>{query}</b></p>}
        {posts.length > 0 ? <CardPosts posts={filteredPost}/>
        :
        <p>Carregando posts...</p>
        }       

    </section>
  )
}

export default UseMemo