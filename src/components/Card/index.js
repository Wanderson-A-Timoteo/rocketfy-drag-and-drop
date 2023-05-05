import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159C1" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img src='https://avatars.githubusercontent.com/u/40473246?v=4' alt='' />
    </Container>
  );
}

export default Card;