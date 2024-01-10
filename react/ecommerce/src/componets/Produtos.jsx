import React, { useState } from 'react'


const Produtos = ({infoProdutos, setCompras}) => {
    const [quantidadeRelogio,  setQuantidadeRelogio] = useState(1)
    const [quantidadeCamera,  setQuantidadeCamera] = useState(1)
    const [quantidadeFone,  setQuantidadeFone] = useState(1)
    const [quantidadeTenis,  setQuantidadeTenis] = useState(1)
    const [quantidadeSmartphone,  setQuantidadeSmartphone] = useState(1)
    const [quantidadeLivro,  setQuantidadeLivro] = useState(1)
    const [idCompra, setIdCompra] = useState(1)
    const heandleAddCompras = (compra)=>{
        setIdCompra((evt)=> evt + 1)
        let compraNova = {
            nome: compra.name,
            price: compra.price,
            img: compra.img, 
            quantidade: null,
            id: idCompra
        }
        switch (compra.id) {
            case 1:
                compraNova.price= (compraNova.price * quantidadeRelogio).toFixed(2)
                compraNova.quantidade= quantidadeRelogio
                break;
            case 2:
                compraNova.price= (compraNova.price * quantidadeCamera).toFixed(2)
                compraNova.quantidade= quantidadeCamera
                break;
            case 3:
                compraNova.price= (compraNova.price * quantidadeFone).toFixed(2)
                compraNova.quantidade= quantidadeFone
                break;
            case 4:
                compraNova.price= (compraNova.price * quantidadeTenis).toFixed(2)
                compraNova.quantidade= quantidadeTenis
                break;
            case 5:
                compraNova.price= (compraNova.price * quantidadeSmartphone).toFixed(2)
                compraNova.quantidade= quantidadeSmartphone
                break;
            case 6:
                compraNova.price= (compraNova.price * quantidadeLivro).toFixed(2)
                compraNova.quantidade= quantidadeLivro
                break;
            default:
                console.log('erro no valor total da compra')
                break;
        }
        setCompras((antigasCompras) => [compraNova, ...antigasCompras])
        setQuantidadeRelogio(1)
        setQuantidadeCamera(1)
        setQuantidadeFone(1)
        setQuantidadeTenis(1)
        setQuantidadeSmartphone(1)
        setQuantidadeLivro(1)
    }

    const heandleForm = (evt)=>{
        evt.preventDefault()
    }
    
    return (

    <section>
        <h1>Catalago</h1>
            <div id='galeria'>
                {infoProdutos.map((produtos)=>[
                    <div key={produtos.id} className="produtos">
                        <img src={produtos.img} alt="" />
                        <h3>{produtos.name}</h3>
                        <h3>R${produtos.price}</h3>
                        <form onSubmit={heandleForm}>
                        <input type="number"
                        value={produtos.id == 1? quantidadeRelogio: 
                            produtos.id ==2?quantidadeCamera:
                            produtos.id ==3?quantidadeFone:
                            produtos.id ==4?quantidadeTenis:
                            produtos.id==5? quantidadeSmartphone:
                            produtos.id=6?quantidadeLivro:null

                    }
                        min={0}
                        max={99}
                        onChange={(evt)=> {produtos.id==1?setQuantidadeRelogio(evt.target.value):
                            produtos.id==2?setQuantidadeCamera(evt.target.value):
                            produtos.id ==3?setQuantidadeFone(evt.target.value):
                            produtos.id ==4?setQuantidadeTenis(evt.target.value):
                            produtos.id==5? setQuantidadeSmartphone(evt.target.value):
                            produtos.id=6?setQuantidadeLivro(evt.target.value):null
                        }}
                        />
                        <input onClick={()=>{
                            heandleAddCompras(produtos)
                            alert(`[ATENÇÃO] ${produtos.name} adicionado no carrinho com sucesso`)
                        }} type="submit" value="comprar" />
                        </form>
                    </div>
                ])}
            </div>
    </section>
  )
}

export default Produtos