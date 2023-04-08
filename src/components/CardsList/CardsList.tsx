import React from 'react';
import Card from '../Card/Card';
import './cardsList.css';
import { Item } from './interfaces/cardslist.interface';

interface CardListProps {
  items: Item[];
  isLoading: boolean;
  error: {
    message: string;
    code: string;
  };
}

function CardsList({ items, isLoading, error }: CardListProps) {
  const cardsList = items.map((card: Item) => {
    return <Card key={card.id.videoId} snippet={card.snippet} />;
  });

  if (isLoading) return null;
  if (error.code) {
    return (
      <div className="error-wrapper">
        <div className="error">
          <div className="icon">⚠️</div>
          {error.message}
          <br />
          Reason: You have reached the maximum number of requests per day
        </div>
      </div>
    );
  }
  return (
    <div className="main-wrapper">
      <div className="cards-wrapper">{cardsList}</div>
    </div>
  );
}

export default CardsList;
