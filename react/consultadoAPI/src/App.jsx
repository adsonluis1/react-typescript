import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import ApiManeger from './components/ApiManeger'
import axios from 'axios'

function App() {
    const [posts, setPosts] = useState([])
    const [erro, setErro] = useState([])
    const [isSelect, setIsSelect] = useState('')
    const [isEditing, setIsEditing] = useState('')

    useEffect(()=>{

      const showPost = async ()=>{
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
          setPosts(response.data.splice(0,5))
        } catch (error) {
          setErro(error)
        }


      }

      showPost()

    },[])

    const handlePosts = (post, type) => {
      if(type === 'add'){
        setPosts((selectPost) => [post, ...selectPost])
      }else if(type === 'edit'){
        setPosts((evt) => evt.map((p)=> p.id === post.id ? post : p))
      }else if(type === 'delete'){
        setPosts((currentPost) => currentPost.filter((p) => p.id !== post))
        setIsSelect('')
        setIsEditing('')
        
      }
    }

    const TrueEditing = (post)=>{
      setIsSelect(post)
      setIsEditing(true)
    }

    const falseEditing = ()=>{
      setIsSelect('')
      setIsEditing('')
    }

  return (
    <>
      <div>
        <h1>Posts</h1>
        <ApiManeger handlePosts={handlePosts} post={isEditing?isSelect:''}/>
        {isEditing?<button onClick={()=>falseEditing()}>cancelar edit</button>:''}
        {posts.map((evt)=>[
          <div key={evt.id}>
            <h2>{evt.title}</h2>
            <p>{evt.body}</p>
            <button onClick={()=>TrueEditing(evt)}>editar</button>
          </div>
        ])}
      </div>
      
    </>
  )
}

export default App
