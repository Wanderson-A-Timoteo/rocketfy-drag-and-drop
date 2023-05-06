import React from 'react';

import { Container, Label } from './styles';

function Card( { data } ) {
  return (
    <Container>
      <header>
        <Label color="#7159C1" />
        { data.labels.map(label => <Label key={label} color={label} /> )}
      </header>
      <p> { data.content } </p>
      { data.user && <img src={data.user} alt='' /> }
    </Container>
  );
}

export default Card;