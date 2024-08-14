import {useForm} from "react-hook-form"
import "./global.css" 
function App() {
  const {register,handleSubmit,formState:{errors},setError} = useForm({
    mode:"onChange"
  })

  const handleSubmitData = (data)=> {
    console.log(data)
  }

  return (
    <>
     <main>
       
       <h1>Login</h1>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <input autoFocus={true} {...register('usuario', {required:"insira o usuario", pattern:{value:/^a/i,message:"o nome tem que começar com a letra 'a'"}})} type="text" placeholder="Usuario"/>
          {errors?.usuario &&
            <p className="error">{errors.usuario?.message}</p>
          }
          <input {...register('senha',{required:true, minLength:{value:6, message:"A senha precisa ter no minimo 6 caracteres"}})} type="password" placeholder="Senha"/>
          {errors?.senha &&
            <p className="error">{errors.senha?.message}</p>
          }
          <input type="submit" value="Enviar" />
        </form>
     </main>
    
    </>
  )
}

export default App
