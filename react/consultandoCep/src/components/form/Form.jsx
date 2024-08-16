import * as Z from "zod"
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"

import * as S from './Form.styled'

const Form = () => {
  const [search, setSearch] = useState('')
  const schema = Z.object({
    address: Z.object({
      cep: Z.string().max(8,"O cep precisa ter 8 digitos").min(8,"O cep precisa ter 8 digitos"),
      cidade: Z.string(),
      bairro: Z.string(),
      estado: Z.string(),
      rua:Z.string()
    })
  })
  const {register, handleSubmit, formState:{ errors }, watch,setValue} = useForm({
    mode:'onBlur',
    reValidateMode:"onChange",
    resolver: zodResolver(schema),
    defaultValues:{
      address:{
        cep:'',
        cidade:'',
        bairro:'',
        estado:'',
        rua:''
    }}
  })

  watch(async ({address})=> {
    if(address.cep.length !== 8) return
    setSearch(address.cep)
  })

  useEffect(()=>{
    const getData= async ()=>{
      try {
        const jsonData = await fetch(`https://viacep.com.br/ws/${search}/json/`)
        const data = await jsonData.json()
        console.log(data)
        handleSetData(data)
      } catch (error) {
        console.log(error)
      }
    }
    if(search.length === 8)
      getData()
  },[search])

  const handleSetData = (data)=>{
    setValue('address.cidade', data.localidade)
    setValue('address.bairro', data.bairro)
    setValue('address.estado', data.uf)
    setValue('address.rua', data.logradouro)
  }


  const handleSubmitData = (data)=>{
    console.log(data)
  }


  return (
    <S.Form onSubmit={handleSubmit(handleSubmitData)}>
        <S.Label>
            Cep
            <S.Input onChange={((e)=> setValue('address.cep',e.target.value))} placeholder="ex: 00000000" {...register('address.cep')} type='number'/>
          </S.Label>
          {errors.address?.cep &&
            <S.Erro>{errors.address.cep.message}</S.Erro>
          }
          <S.Label>
            Estado
            <S.Input {...register('address.estado')} type='text'/>
          </S.Label>  
          <S.Label>
            Cidade
            <S.Input {...register('address.cidade')}type='text'/>
          </S.Label>
          <S.Label>
            Bairro
            <S.Input {...register('address.bairro')} type='text'/>
          </S.Label>
          <S.Label>
            Rua
            <S.Input {...register('address.rua')} type="text"/>
          </S.Label>
          <S.Input type='submit' />
    </S.Form>
  )
}

export default Form