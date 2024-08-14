import {useForm} from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import "./global.css"

function App() {
  const schema = z.object({
    usuario: z.string().min(3,"No minimo 3 caracteres"),
    senha: z.string().min(6, "No minimo 6 caracteres"),
    confirmSenha: z.string().min(6, "No minimo 6 caracteres")
  }).refine((fields)=> fields.senha === fields.confirmSenha,{
    path:["confirmSenha"],
    message:"As senhas precisam ser iguais"
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    mode:"onBlur",
    resolver: zodResolver(schema)
  })

  const handleSubmitData = (data)=> {
    console.log(data)
  }

  return (
    <>
     <main>
       
       <h1>Login</h1>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <input autoFocus={true} {...register('usuario')} type="text" placeholder="Usuario"/>
          {errors?.usuario &&
            <p className="error">{errors.usuario?.message}</p>
          }
          <input {...register('senha')} type="password" placeholder="Senha"/>
          {errors?.senha &&
            <p className="error">{errors.senha?.message}</p>
          }
          <input {...register('confirmSenha')} type="password" placeholder="Confirme a senha"/>
          {errors?.confirmSenha &&
            <p className="error">{errors.confirmSenha?.message}</p>
          }
          <input type="submit" value="Enviar" />
        </form>
     </main>
    
    </>
  )
}

export default App
