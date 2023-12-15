function RenderCondicional ({logado}){
    if(logado == true){
        return (
            <div>
                <button>Sair</button>
            </div>
        )
    }else{
        return (
            <div>
                <button>Entrar</button>
            </div>
        )
    }
}

export default RenderCondicional