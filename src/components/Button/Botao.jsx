import React from 'react'

const Botao = ({style, text}) => {
  return (
    <button className={style}>{text}</button>
  )
}

export default Botao