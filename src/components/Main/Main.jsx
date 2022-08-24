import React, { useState, useEffect } from "react";
import Botao from "../Button/Botao";
import Card from "../Card/Card";
import Linhahr from "../Linhahr/Linhahr";
import Newsletter from "../Newsletter/Newsletter";
import Section from "../Section/Section";
import S from "./Main.module.css";

const Main = () => {
  const [informacoes, setInformacoes] = useState([]);
  const [page, setPage] = useState(
    "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
  );
  const [nextPage, setNextPage] = useState("");

  async function handleRequisicao() {
    const response = await fetch(`https://${page}`);
    const json = await response.json();
    setInformacoes([...json.products]);
    setNextPage(json.nextPage);
  }

  const proxP = () => {
    setPage(nextPage);
  };

  useEffect(() => {
    handleRequisicao();
  }, [page]);

  return (
    <main>
      <section>
        <Section />
      </section>
      <section>
        <div>
          <Linhahr text="Sua seleção especial" />
        </div>
        <div className={S.cardPrincipal}>
          <div className={S.cards}>
            {informacoes.length > 0 &&
              informacoes.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imagem={item.image}
                    titulo={item.name}
                    descricao={item.description}
                    precoOriginal={item.oldPrice}
                    precoAtual={item.price}
                    parcelado={item.installments.count}
                    qtd={item.installments.value}
                  />
                );
              })}
          </div>
        </div>
        <div className={S.divBotao}>
          <Botao
            func={proxP}
            style={S.button}
            text="Adquira mais produtos aqui"
          />
        </div>
      </section>
      <section>
        <div>
          <Linhahr text="Compartilhe a novidade" />
        </div>
        <div>
          <Newsletter />
        </div>
      </section>
    </main>
  );
};

export default Main;
