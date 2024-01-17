import React from 'react'
import { Link } from 'react-router-dom'
import { selecao } from '../types/selecao'


const Selecao = ({setPessoas, carnes, pessoas}:selecao) => {
    
    const heandleSumbimt = (evt:React.FormEvent)=>{
        evt.preventDefault()
    }

    return (
    <section id='secSelecao'>
        <div>
            <h1>Calculadora de Churrasco</h1>
        </div>

        <div id='DivSelecaoDeCarnes'>
            <input 
            type="number"
            min={1}
            value={pessoas}
            onChange={(evt:React.ChangeEvent<HTMLInputElement>)=> setPessoas(evt.target.value)}
            />

            <h2>selecione os alimentos para o churrasco:</h2>
            <form onSubmit={heandleSumbimt}>
                <div className="carnes">
                    <input 
                    type="checkbox" 
                    id="carne" 
                    onClick={()=>{
                        carnes.carne?carnes.carne=false:carnes.carne=true
                        console.log(carnes)
                    }}
                    />
                    <label htmlFor="carne">Carne</label>
                </div>

                <div className="carnes">
                    <input 
                    type="checkbox" 
                    id="frango" 
                    onClick={()=>{
                        carnes.frango?carnes.frango=false:carnes.frango=true
                        console.log(carnes)
                    }}
                    />
                    <label htmlFor="frango">Frango</label>
                </div>

                <div className="carnes">
                    <input type="checkbox"
                    id="linguiça" 
                    onClick={()=>{
                        carnes.linguiça?carnes.linguiça=false:carnes.linguiça=true
                        console.log(carnes)
                    }}
                    />
                    <label htmlFor="linguiça">Linguiça</label>
                </div>

                <div className="carnes">
                    <input type="checkbox"
                    id="paoDeAlho"
                    onClick={()=>{
                        carnes.paoDeAlho?carnes.paoDeAlho=false:carnes.paoDeAlho=true
                        console.log(carnes)
                    }}
                    />
                    <label htmlFor="paoDeAlho">Pão de alho</label>
                </div>

                
                <Link to={'/Final'}><input type="submit" value="Calcular" className='btn'/></Link>
            </form>
        </div>
    </section>
  )
}

export default Selecao