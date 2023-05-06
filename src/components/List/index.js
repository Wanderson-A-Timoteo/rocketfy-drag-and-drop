import React from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card/index";
import { Container } from "./styles";

function List( { data } ) {
  return (
    <Container>
      <header>
        <h2> { data.title } </h2>
        { data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#FFF' />
          </button>
        )}
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;