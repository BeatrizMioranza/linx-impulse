import React from "react";
import S from "./Linhahr.module.css";

const Linhahr = ({ text }) => {
  return (
    <div className={S.break}>
      <hr className={S.hr}></hr>
      <p className={S.p}>{text}</p>
    </div>
  );
};

export default Linhahr;
