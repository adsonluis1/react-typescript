import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const Sertch = () => {
  const [sertchParams] = useSearchParams()
  const url = `http://localhost:3000/producrs?${sertchParams}`

  useEffect(()=>{
    const getElements = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    getElements()
  },[])

  return (
    <div>Sertch</div>
  )
}

export default Sertch