import React, { useState } from 'react'
import ImgSelect from './ImgSelect'

const Foto = ({dados, setSelectImg}) => {
  
  return (
      <div className="foto">
        <img onClick={(evt)=> setSelectImg(dados)} src={dados.urls.small} alt={dados.autoDescription} />
      </div>
  )
}

export default Foto