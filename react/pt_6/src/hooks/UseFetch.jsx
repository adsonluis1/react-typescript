import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseFetch = (url, options) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [charge, setCharge] = useState(false)
    const refUrl = useRef()
    const refOptions = useRef()

    useEffect(()=>{
        let verify = false
        if(refUrl.current != url){
            refUrl.current = url
            verify = true
        }

        if(!JSON.stringify(refOptions.current) === JSON.stringify(options)){
            refOptions.current = options
            verify = true
        }
        if(verify)
            setCharge((s)=>!s )

    },[url, options])

    useEffect(()=>{
        let wait = false
        console.log('useEffect ativado', new Date().toLocaleString('pt-br'))
        const handleFetch = async ()=>{
            setLoading(true)
            try {
                const response = await fetch(refUrl.current, refOptions.current)
                const data = await response.json()
                if(!wait){
                setResult(data)
                setLoading(false)
                }
            } catch (error) {
                if(!wait){
                    setLoading(false)
                }
                throw error
            }
        }

        handleFetch()
        
        return () => {
            wait = true    
        }
               
    },[charge])

    
    return [result, loading]
}

export default UseFetch