import './App.css'
import UseFetch from './hooks/UseFetch'

function App() {
  const [result, loading] =  UseFetch('https://jsonplaceholder.typicode.com/posts',{
    method:'get',
    headers:{
      abc:'1'
    }
  })
  if(loading){
    return <h1>Carregando...</h1>
  }

  if(!loading){
    console.log(result)
  }

  return (
    <>
     <p>oii</p>
    </>
  )
}

export default App
