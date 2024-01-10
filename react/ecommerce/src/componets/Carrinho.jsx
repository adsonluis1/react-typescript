import React, { useState } from 'react'

const Carrinho = ({compras, setSelectCarrinho, setCompraFinsh, setCompras, setComprado}) => {
    
    
    const addComprado = (com)=>{
        setComprado((evt) => [...com, ...evt])
    }

    const editId = (element) =>{
        element.id = Date.now()
    }
    
    let total = 0
    {compras.map((compra)=>[
       total+= parseFloat(compra.price)  
           
    ])}
    return (
    <section>
        <h1>Carrinho</h1>
        <div id='carrinho'>
            {compras.map((compra)=>[
                <div key={compra.id} className='childrenCarrinho'>
                    <div className='infoCompras'>
                        <h3>{compra.nome}</h3>
                        <h3>quantidade: {compra.quantidade}</h3>
                        <h3>valor: {compra.price}</h3>
                        <button onClick={()=>{
                            setCompraFinsh(true)
                            setSelectCarrinho(false)
                            editId(compra)
                            setCompras(
                                (comprasAntigas)=> comprasAntigas.filter((p)=> p.id !== compra.id)
                            )
                            setComprado((evt) => [compra, ...evt])
                        }}>Comprar</button>
                    </div>
                    <div className='imgCompras'>
                        <img src={compra.img} alt={compra.name} />
                    </div>
                </div>
            ])}
                

        </div>
        {total>0?<h2>Total: {total.toFixed(2)}</h2>:<h2>Carrinho vazio...</h2>}
        {total>0? <button onClick={()=> {
            setCompraFinsh(true)
            setSelectCarrinho(false)
            setCompras([])
            compras.id= Date.now
            compras.price= compras.price * compras.quantidade
            addComprado(compras)
            }}>Comprar tudo</button>:''}
        
       
    </section>
  )
}

export default Carrinho