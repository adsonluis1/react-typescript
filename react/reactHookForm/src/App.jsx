import {useForm} from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import "./global.css"

function App() {
  const schema = z.object({
    usuario: z.string().min(3,"No minimo 3 caracteres"),
    url:z.string().url("Digite uma url valida"),
    senha: z.string().min(6, "No minimo 6 caracteres"),
    confirmSenha: z.string().min(6, "No minimo 6 caracteres"),
    termos: z.boolean()
  }).refine((fields)=> fields.senha === fields.confirmSenha,{
    path:["confirmSenha"],
    message:"As senhas precisam ser iguais"
  }).refine((fields)=> fields.termos == true,{
    path:["termos"],
    message:"Aceite os termos"
  }).transform((fields)=>({
    usuario:fields.usuario,
    url: new URL(fields.url),
    senha:fields.senha,
    confirmSenha:fields.confirmSenha,
    termos:fields.termos
  }))

  const {register,handleSubmit,formState:{errors}} = useForm({
    mode:"all",
    reValidateMode:"onChange",
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
          <input {...register('url')} placeholder="Digite uma url" type="url"/>
          {errors?.url &&
            <p className="error">{errors.url?.message}</p>
          }
          <input {...register('senha')} type="password" placeholder="Senha"/>
          {errors?.senha &&
            <p className="error">{errors.senha?.message}</p>
          }
          <input {...register('confirmSenha')} type="password" placeholder="Confirme a senha"/>
          {errors?.confirmSenha &&
            <p className="error">{errors.confirmSenha?.message}</p>
          }
          
          <label>
            <input {...register('termos')} type="checkbox" />
            Termos de privacidade
            </label>
            {errors?.termos && 
              <p className="error">{errors.termos?.message}</p>
            }
          <input type="submit" value="Enviar" />
        </form>
     </main>
    
    </>
  )
}

export default App
