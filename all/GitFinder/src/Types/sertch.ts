export type usuario = {
    login:string
    id:number
    avatar_url:string
    url:string
    html_url:string
    followers:number
    following:string
    location:string | null
    public_repos:number
}

export type sertch = {
    conta:string
    setConta:(evt:string)=> void
    setShowSertch:(evt:boolean)=> void
    setErro:(evt:string | unknown)=>void
    erro:string | unknown
}

export type conta = {
    conta:string | usuario
    setConta:(evt:string)=> void
}