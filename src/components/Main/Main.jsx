import React, {useState, useEffect} from 'react'
import Botao from '../Button/Botao';
import Card from '../Card/Card';
import Section from '../Section/Section';
import S from './Main.module.css'

const Main = () => {
    const [informacoes, setInformacoes] = useState([]);
    const [page, setPage] = useState(1)
  
    async function handleRequisicao() {
      const response = await fetch(
        `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
      );
      const json = await response.json();
      setInformacoes([...informacoes,...json.products]);
      console.log(informacoes)
    }
  
    const nextPage = ()=>{
      setPage(page+ 1)
    }
  
    useEffect(() => {
      handleRequisicao();
    }, [page]);
  
    return (
      <main >
        <section>
            <Section/>
        </section>
        <section >
          <div >
            <div>
              <hr />
            </div>
            <h3 >Sua seleção especial!</h3>
            <div>
              <hr />
            </div>
          </div>
          <div>
            {informacoes.length>0 &&
              informacoes.map((item,index) => {
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
          <Botao onClick={nextPage} style={S.button} text="Adquira mais produtos aqui" />
        </section>
        <section >
          <div >
            <div>
              <hr />
            </div>
            <h3>Compartilhe a novidade</h3>
            <div>
              <hr />
            </div>
          </div>
          <p>
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </p>
        </section>
      </main>
    );
  };

export default Main