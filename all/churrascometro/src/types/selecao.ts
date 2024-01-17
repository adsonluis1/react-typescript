export type carnes = {
    carne:boolean,
    frango:boolean,
    linguiça:boolean,
    paoDeAlho:boolean
}

export type selecao = {
    pessoas:string,
    setPessoas:(evt:string)=> void,
    carnes:carnes
} 