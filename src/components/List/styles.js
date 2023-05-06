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
`;