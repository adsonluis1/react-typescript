import * as S from "./Form.styled"
import * as Z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {useEffect} from "react"

const FormCpf = () => {
    const maskCpf = (cpf)=>{
        cpf = cpf.replace(/\D!-/g,"")
        cpf = cpf.replace(/^(\d{3})(\d)/,"$1.$2")
        cpf = cpf.replace(/^(\d{3}\.)(\d{3})(\d)/,"$1$2.$3")
        cpf = cpf.replace(/^(\d{3}\.)(\d{3}\.)(\d{3})(\d)$/,"$1$2$3-$4")
        return cpf
    }

    const maskCnpj = (cnpj)=>{
        cnpj = cnpj.replace(/\D![-/]/g,"")
        cnpj = cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
        cnpj = cnpj.replace(/^(\d{2}\.)(\d{3})(\d)/,"$1$2.$3")
        cnpj = cnpj.replace(/^(\d{2}\.)(\d{3}\.)(\d{3})(\d)/,"$1$2$3/$4")
        cnpj = cnpj.replace(/^(\d{2}\.)(\d{3}\.)(\d{3}\/)(\d{4})(\d)/,"$1$2$3$4-$5")
        return cnpj
    }

    const schema = Z.object({
        cpf: Z.string().min(14,'cpf Invalido'),
        doneCnpj:Z.boolean(),
        cnpj: Z.string().optional()
    }).superRefine((data, ctx) => {
        if(data.doneCnpj && data.cnpj.length != 18){
            ctx.addIssue({
                code:Z.ZodIssueCode.custom,
                path:["cnpj"],
                message:"cnpj Invalido"
            })
        }
    })
    
    const {register,watch,setValue,handleSubmit,formState:{errors}} = useForm({
        mode:"all",
        resolver: zodResolver(schema),
        defaultValues:{
            cpf:"",
            doneCnpj:false,
            cnpj:''
        }
    })
    
    const doneCnpj = watch('doneCnpj')
    const cnpj = watch('cnpj')
    const cpf = watch('cpf')

    const handleSubmitData = (data)=> console.log(data)
    
    useEffect(()=>{
        setValue('cpf',maskCpf(cpf))
        setValue('cnpj',maskCnpj(cnpj))
    },[cpf,setValue,cnpj])
    useEffect(()=>{
        setValue('cnpj','')
    },[doneCnpj])

    return (
    <S.Form onSubmit={handleSubmit(handleSubmitData)}>
        <S.Label>
            CPF
            <S.Input 
            {...register('cpf')} 
            type="text" 
            maxLength={14}
            placeholder="Digite seu cpf" 
            />
        </S.Label>
        {errors.cpf && 
            <S.Error>{errors.cpf.message}</S.Error>
        }
        <S.Label $row={true}>
            Possui cnpj ?
            <S.Input {...register('doneCnpj')} type="checkbox"/>
        </S.Label>

        <S.Label $noneView={!doneCnpj}>
            Cnpj
            <S.Input 
            {...register('cnpj')} 
            type="text" 
            placeholder="Digite seu cnpj"
            maxLength={18}
            />
        </S.Label>
        {errors.cnpj &&
            <S.Error>{errors.cnpj.message}</S.Error>
        }
        <S.Input type="submit" value={'enviar'}/>
    </S.Form>
  )
}

export default FormCpf