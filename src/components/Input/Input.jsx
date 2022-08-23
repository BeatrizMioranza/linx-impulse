import React from 'react'

const Input = ({style, type, name}) => {
  return (
    <input className={style} type={type} name={name}/>
  )
}

export default Input