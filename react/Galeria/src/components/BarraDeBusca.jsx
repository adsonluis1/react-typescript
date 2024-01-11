import React from 'react'

const BarraDeBusca = () => {
  
  const selecters = [
    'Natureza',
    'Pessoas',
    'Tecnologia',
    'Animais',
    'Esportes'
  ]

  return (
    <div className='barraBusca'>
      <input type="text" placeholder='Busque sua imagem aqui...'/>
      <select>
          {selecters.map((evt)=>[
            <option key={evt} value={evt}>{evt}</option>
          ])}
      </select>
      <button>Pesquisar</button>
    </div>
  )
}

export default BarraDeBusca