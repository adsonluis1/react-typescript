import React from 'react'
import {useNavigate } from 'react-router-dom'
import { selecao } from '../types/selecao'


const Selecao = ({setPessoas, carnes, pessoas}:selecao) => {
    const navigate = useNavigate()
    const heandleSumbimt = (evt:React.FormEvent)=>{
        evt.preventDefault()
        if(carnes.quantidade>=1){
            navigate('/Final')
        }else{
           alert('Precisa selecionar uma pelo menos uma carne')
        }
        
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
                        carnes.carne?carnes.quantidade = 1:carnes.quantidade= -1
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
                        carnes.frango?carnes.quantidade = 1:carnes.quantidade= -1
                    }}
                    />
                    <label htmlFor="frango">Frango</label>
                </div>

                <div className="carnes">
                    <input type="checkbox"
                    id="linguiça" 
                    onClick={()=>{
                        carnes.linguiça?carnes.linguiça=false:carnes.linguiça=true
                        carnes.linguiça?carnes.quantidade = 1:carnes.quantidade= -1
                    }}
                    />
                    <label htmlFor="linguiça">Linguiça</label>
                </div>

                <div className="carnes">
                    <input type="checkbox"
                    id="paoDeAlho"
                    onClick={()=>{
                        carnes.paoDeAlho?carnes.paoDeAlho=false:carnes.paoDeAlho=true
                        carnes.paoDeAlho?carnes.quantidade = 1:carnes.quantidade= -1
                    }}
                    />
                    <label htmlFor="paoDeAlho">Pão de alho</label>
                </div>

               <button type="submit" className='btn'>Calcular</button>
            </form>
        </div>
    </section>
  )
}

export default Selecao