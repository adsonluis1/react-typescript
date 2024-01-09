import React, { useState } from 'react'


const Produtos = ({infoProdutos}) => {
    const [quantidade,  setQuantidade] = useState(0)
    console.log(infoProdutos)
    return (

    <section>
        <h1>Catalago</h1>
        <div id='pai'>
    
            <div id='galeria'>
                {infoProdutos.map((produtos)=>[
                    <div key={produtos.id} className="produtos">
                        <img src={produtos.img} alt="" />
                        <h3>{produtos.name}</h3>
                        <h3>R${produtos.price}</h3>
                        <form>
                        <input type="number"
                        value={quantidade}
                        min={0}
                        max={99}
                        onChange={(evt)=> setQuantidade(evt.target.value)}
                        />
                        <input type="submit" value="comprar" />
                        </form>
                    </div>
                ])}
            </div>
        </div>
    </section>
  )
}

export default Produtos