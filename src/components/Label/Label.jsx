import React from 'react'

const Label = ({style,text}) => {
  return (
    <label className={style}>{text}</label>
  )
}

export default Label