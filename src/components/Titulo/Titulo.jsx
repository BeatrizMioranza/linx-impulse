import React from 'react'

const Titulo = ({style, text}) => {
  return (
    <div>
        <h1 className={style}>{text}</h1>
    </div>
  )
}

export default Titulo