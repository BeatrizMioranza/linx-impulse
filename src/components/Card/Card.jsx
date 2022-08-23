import React from 'react'
import Botao from '../Button/Botao'

const Card = ({imagem, titulo, descricao, precoOriginal, precoAtual, parcelado, qtd}) => {
  return (
    <article> 
        <picture>
            <img src={imagem} alt="" />
        </picture>
        <h3>{titulo}</h3>
        <small>{descricao}</small>
        <h4>{precoOriginal}</h4>
        <h5>{precoAtual}</h5>
        <h6>ou {parcelado}x de:{qtd}</h6>
        <Botao text="Comprar"/>
    </article>
  )
}

export default Card