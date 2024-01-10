import React from 'react'

const CompraFinalizada = ({compras}) => {
    let total=0 
    compras.map((evt)=>{
        total+= parseFloat(evt.price)
    })
    return (
    <section>
        <div id="tituloCompras">
            <h1>Obrigado pela preferencia</h1>
            <h2>Compra realizada com sucesso</h2>
        </div>
        <h2>Informações da compra</h2>
        <div id='viewProduto'>
           {compras.map((compra) => [
            <div key={compra.id}>
                <p>{compra.nome} {compra.quantidade}x</p>
                <p>Valor: R${compra.price}</p>
            </div>
           ])}
           <p>Valor total: R${total.toFixed(2)}</p>
        </div>
    </section>
  )
}

export default CompraFinalizada