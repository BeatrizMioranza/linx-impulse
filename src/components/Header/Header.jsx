import React from 'react'
import Titulo from '../Titulo/Titulo'
import Botoes from "../Button/Botao"
import S from "./Header.module.css"

const Header = () => {

  const titulos = [
    {
      text:"uma seleção de produtos",
      style: S.titulo
    },

    {
      text:"especial para você",
      style: S.tituloDois
    },

    {
      text:"Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!",
      style: S.subtitulo
    }
  ]

  const botoes =[
    {
      text:"Conheça a Linx",
      style:S.botoes

    }, 

    {
      text:"Ajude o algorítimo",
      style:S.botoes
    },

    {
      text:"Seus produtos",
      style:S.botoes
    },

    {
      text:"Compartilhe",
      style:S.botoes
    }
  ]

  return (
    <header className={S.header}>
      <div>
        {titulos.map(titulo=> <Titulo style = {titulo.style} text={titulo.text}/>)}
      </div>
      <div className={S.botao}>
        {botoes.map(btn=> <Botoes style = {btn.style} text={btn.text}/>)}
      </div>
    </header>
  )
}

export default Header