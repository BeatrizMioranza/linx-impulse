import React from 'react'

const Forms = ({style}) => {
  return (
    <form className={style}>
      <label>Seu nome<input type="text" name="Name" /></label>
      <label>E-mail<input type="text" name="email" /></label>
      <label>CPF<input type="text" name="cpf" /></label>
      <label><input type="radio" name="check" />Masculino</label>
      <label><input type="radio" name="check" />Feminino</label>
    </form>
  )
}

export default Forms