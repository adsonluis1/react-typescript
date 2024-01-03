import {useEffect, useState} from 'react'
import axios from 'axios'

const AddPosts = () => {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const hadleSubmit = (evt)=>{
        evt.preventDefault()
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
            <input type="submit" value="enviar"/>
        </div>

    </form>
  )
}

export default AddPosts