import React from 'react'

const Button = ({text,disable=false,onBtnClick,value}) => {
  return (
    <button disabled={disable} onClick={()=>onBtnClick(value)}>{text}</button>
  )
}

export default Button