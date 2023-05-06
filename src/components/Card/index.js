import React, { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from './styles';

function Card( { data, index } ) {
  const ref = useRef();

  const [{isDragging}, dragRef] = useDrag({
    item: { type: 'CARD', index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index

      if(draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = draggedOffSet.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }
    }
  })

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging} >
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