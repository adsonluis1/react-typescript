import React from 'react'

const ImgSelect = ({foto, setFoto}) => {
  return (
    <div className='foto-ampliada-background' onClick={()=>{setFoto(null)}}>
        <div className="foto-ampliada-container">
            <img src={foto.urls.regular} alt={foto.alt_}description />
        </div>
    </div>
  )
}

export default ImgSelect