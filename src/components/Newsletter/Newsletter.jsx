import React from "react";
import S from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={S.news}>
      <p className={S.p}>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form className={S.forms}>
        <div className={S.divlabel}>
          <label key={1}>Nome do seu amigo:</label>
          <input className={S.input} type="text" name="Name" />
        </div>
        <div className={S.divlabel}>
          <label key={2}>E-mail:</label>
          <input className={S.input} type="text" name="email" />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
