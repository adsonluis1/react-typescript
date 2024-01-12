import React, { useState } from 'react'

const BarraDeBusca = ({setQuery, setCategoria, setSelectBarraDeBusca}) => {
  let [text, setText] = useState('') 
  const selecters = [
    'Natureza',
    'Pessoas',
    'Tecnologia',
    'Animais',
    'Esportes'
  ]

  return (
    <div className='barraBusca'>
      <input 
      type="text" 
      placeholder='Busque sua imagem aqui...'
      onChange={(evt)=> {
        setQuery(evt.target.value)
        setText(evt.target.value)
      } }
      value={text}
      />
      <select onChange={(evt)=>{
              setCategoria(evt.target.value)
              setSelectBarraDeBusca(true)
            }}>
          {selecters.map((evt)=>[
            <option 
            key={evt} 
            value={evt}
            >{evt}</option>
          ])}
      </select>
      <button onClick={()=>{
        setSelectBarraDeBusca(true)
        setText('')
        }}>Pesquisar</button>
    </div>
  )
}

export default BarraDeBusca