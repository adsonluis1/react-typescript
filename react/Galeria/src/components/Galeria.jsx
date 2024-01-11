import React from 'react'
import Foto from './Foto'

const Galeria = ({fotos, setSelectImg}) => {
  return (
    <div className='album'>
        {fotos.map((foto)=>[
           <Foto key={foto.id} 
           dados={foto} 
           setSelectImg={setSelectImg}/>
        ])}
    </div>
  )
}

export default Galeria