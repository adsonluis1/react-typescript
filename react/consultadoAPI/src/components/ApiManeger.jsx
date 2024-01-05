import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiManeger = ({handlePosts, post}) => {  
    
    const [title, setTitle] = useState(post?.title ||'')
    const [body, setBody] = useState(post?.body ||'')

    useEffect(()=>{
        if(post){
        setTitle(post.title)
        setBody(post.body)
        }
    },[post])

    const handleSubmit = (evt) =>{
        evt.preventDefault()

        const newPost = {title, body, useId:1}

       
        const heandlePublicPost = async ()=>{
            try {
                
            if (post) {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost)  
                handlePosts(response.data, 'edit') 
                }else {
                    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
                    handlePosts(response.data, 'add') 
            }
              
            } catch (error) {
                console.log(error)
            }

        }
        heandlePublicPost()
        
    }
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <input 
            type="text"
            value={title}
            placeholder='digite o titulo...'
            onChange={(evt) => setTitle(evt.target.value)}
            />
        </div>

        <div>
            <textarea
            value={body}
            placeholder='digite o post...'
            onChange={(evt)=> setBody(evt.target.value)}
            ></textarea>
        </div>
        <button type="submit">enviar</button>
    </form>
  )
}

export default ApiManeger