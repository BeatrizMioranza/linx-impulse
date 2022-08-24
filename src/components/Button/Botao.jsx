import React from 'react'

const Botao = ({style, text, func}) => {
  return (
    <button onClick={func} className={style}>{text}</button>
  )
}

export default Botao