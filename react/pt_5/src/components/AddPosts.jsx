import {useEffect, useState} from 'react'
import axios from 'axios'

const AddPosts = ({addNewsPosts}) => {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    const [edit, setEdit] = useState('')
    const [select, setSelect] = useState('')


    const hadleSubmit = (evt)=>{
        evt.preventDefault()

        const NewPost = {title, body, userId:1}

            const addPostAPI = async ()=>{
                try {    
                 const response = await axios.post("https://jsonplaceholder.typicode.com/posts", NewPost)
                 addNewsPosts(response.data,'add')
             } catch (error) {
                     console.log(error)
                 }
     
     
             }

             addPostAPI()
                
    }

    return (
    <form onSubmit={hadleSubmit}>
        <div>
            <input 
            type="text"
            value={title}
            placeholder='digite o titulo'
            onChange={(evt)=>{setTitle(evt.target.value)}}
            />
        </div>

        <div>
            <textarea 
            value={body}
            placeholder='digite o texto...'
            onChange={(evt)=>{setBody(evt.target.value)}}
            ></textarea>
        </div>

        <div>
            <button type="submit">Postar</button>
        </div>

    </form>
  )
}

export default AddPosts