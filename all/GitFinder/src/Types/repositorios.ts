export type repositorios = {
    html_url:string
    fork_count:number
    stargazers_count:number
    name:string
    id:number
    language:string
}

import { usuario } from "./sertch"

export type repositorio = {
    repositorios:usuario
}