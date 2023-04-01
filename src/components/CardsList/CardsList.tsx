import React from 'react';
import Card from '../Card/Card';
import './cardsList.css';
import { Item, Items } from './interfaces/cardslist.interface';

function CardsList({ items }: Items) {
  const cardsList = items.map((card: Item) => {
    return <Card key={card.id.videoId} snippet={card.snippet} />;
  });
  return (
    <div className="main-wrapper">
      <div className="cards-wrapper">{cardsList}</div>
    </div>
  );
}

export default CardsList;
