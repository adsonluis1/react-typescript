import React from 'react'
import  {DivNewsStyled}  from './DivNews.styled'

const DivNews = ({title, description, children}) => {
  return (
    <DivNewsStyled>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
    </DivNewsStyled>
  )
}

export default DivNews