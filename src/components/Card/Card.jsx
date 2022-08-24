import React from 'react'
import Botao from '../Button/Botao'
import S from './Card.module.css'

const Card = ({imagem, titulo, descricao, precoOriginal, precoAtual, parcelado, qtd}) => {
  return (
    <div className={S.card}> 
        <picture>
            <img className={S.img} src={imagem}/>
        </picture>
        <h3 className={S.teste}>{titulo}</h3>
        <small className={S.descricao}>{descricao}</small>
        <h4>De: R${precoOriginal}</h4>
        <h3 className={S.precoAtual}>Por: R${precoAtual}</h3>
        <h5>ou {parcelado}x de R${qtd}</h5>
        <Botao style={S.botao} text="Comprar"/>
    </div>
  )
}

export default Card