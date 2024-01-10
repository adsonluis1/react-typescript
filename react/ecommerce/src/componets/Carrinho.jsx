import React from 'react'

const Carrinho = ({compras}) => {
  return (
    <section>
        <h1>Carrinho</h1>
        <div id='carrinho'>
            {compras.map((compra)=>[
                <div key={compra.id} className='childrenCarrinho'>
                    <div>
                        <h3>{compra.nome}</h3>
                        <h3>quantidade: {compra.quantidade}</h3>
                        <h3>valor: {compra.price}</h3>
                        <button>comprar</button>
                    </div>
                    <div>
                        <img src={compra.img} alt="" />
                    </div>
                </div>
            ])}


        </div>
    </section>
  )
}

export default Carrinho