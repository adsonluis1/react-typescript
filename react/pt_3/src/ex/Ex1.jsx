import { useState ,useEffect } from "react"

function Ex1 ({infoUsuario}){
    const [nome , idade, cpf] = [infoUsuario.nome, infoUsuario.idade, infoUsuario.cpf]

    useEffect(()=>{
        document.title =`informações de ${nome}`
   },[])

    return (
        <div>
            <h1>informações</h1>
            <h3>nome: {nome}</h3>
            <h3>idade: {idade}</h3>
            <h3>cpf: {cpf}</h3>
        </div>
    )
}

export default Ex1