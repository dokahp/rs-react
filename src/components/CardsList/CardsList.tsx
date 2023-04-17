import React from 'react';
import Card from '../Card/Card';
import './cardsList.css';
import { Item } from './interfaces/cardslist.interface';

interface CardListProps {
  items: Item[];
  isLoading: boolean;
  openModal: (videoId: string) => void;
}

function CardsList({ items, isLoading, openModal }: CardListProps) {
  const cardsList = items.map((card: Item) => {
    return (
      <Card
        key={card.id.videoId}
        videoId={card.id.videoId}
        snippet={card.snippet}
        openModal={openModal}
      />
    );
  });

  if (isLoading) return null;

  return (
    <div className="main-wrapper">
      <div className="cards-wrapper">{cardsList}</div>
    </div>
  );
}

export default CardsList;
