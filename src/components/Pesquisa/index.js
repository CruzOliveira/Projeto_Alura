import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/index';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  flex-wrap: wrap;

  p {
    width: 200px;
    text-shadow: 1px 1px 2px black;
  }
  img {
    width: 100.6px;
    height: 134.93px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <div>
        <Input
          placeholder="Escreva sua próxima leitura"
          onBlur={(evento) => {
            const textoDigitado = evento.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.id.includes(textoDigitado),
            );
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
      </div>
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <img src={livro.src} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
