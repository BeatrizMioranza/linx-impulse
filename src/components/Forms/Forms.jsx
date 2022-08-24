import React from "react";
import Botao from "../Button/Botao";
import S from "./Forms.module.css";

const Forms = () => {
  return (
    <form className={S.formulario}>
      <label key={1}>Seu nome</label>
      <input className={S.input} type="text" name="Name" />
      <label key={2}>E-mail</label>
      <input className={S.input} type="text" name="email" />
      <label key={3}>CPF</label>
      <input className={S.input} type="text" name="cpf" />
      <label key={4}>
        <input type="radio" name="check" />
        Masculino
      </label>
      <label key={5}>
        <input type="radio" name="check" />
        Feminino
      </label>
      <Botao style={S.botao} text="Enviar" />
    </form>
  );
};

export default Forms;
