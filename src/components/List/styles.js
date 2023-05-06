import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex:  0 0 320px;

  /*
  flex:  0 0 320px; é o mesmo que fazer as declarações abaixo;

  // Determina a habilidade de um componente esticar mais que o necessario caso tenha mais conteúdo, zerando mantem o componente com tamanho fixo.
  flex-grow: 0; 

  // Posibilita que o componente possa diminuir ou encolher, zerando ao diminuir a tela o componente mantem o mesmo tamanho e gera uma barrra de rolagem.
  flex-shrink: 0; 

  // Tamanho base do elemento
  flex-basis: 320px; 

*/

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    padding: 0 10px;
  }

  button {
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background-color: #3B5BFD;
    border: 0;
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
  }
`;