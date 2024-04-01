import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseFetch = (url, options) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        console.log('useEffect ativado', Date.now().toLocaleString('pt-br'))
        const handleFetch = async ()=>{
            setLoading(true)
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                setResult(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                throw error
            }
        }

        return () => {
            handleFetch() 
        }
               
    },[])

    
    return [result, loading]
}

export default UseFetch