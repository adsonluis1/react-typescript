export type repositorios = {
    html_url:string 
    forks:number 
    stargazers_count:number
    name:string 
    id:number 
    language:string 
}

import { usuario } from "./sertch"

export type repositorio = {
    repositorios:usuario
    setShowSertch:(evt:boolean)=>void
    setConta:(evt:string)=>void
    setErro:(evt:string | unknown)=>void
}