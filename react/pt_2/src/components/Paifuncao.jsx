import Filhoafuncao from "./Filhofuncao"

function Paifuncao (){
    const handleChild = ()=>{
        console.log('vc clicou na função filho')
    }


    return (
        <div>
            <Filhoafuncao onChild={handleChild}/>
        </div>
    )
}

export default Paifuncao