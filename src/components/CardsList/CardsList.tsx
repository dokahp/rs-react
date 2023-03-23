import React from 'react';
import Card from '../Card/Card';
import './cardsList.css';
import { Item, Items } from './interfaces/cardslist.interface';

class CardsList extends React.Component<Items, Items> {
  constructor(props: Items) {
    super(props);
    const { items } = this.props;
    this.state = { items };
  }

  render() {
    const { items } = this.state;
    const cardsList = items.map((card: Item) => {
      return <Card key={card.id.videoId} snippet={card.snippet} />;
    });
    return (
      <div className="main-wrapper">
        <div className="cards-wrapper">{cardsList}</div>
      </div>
    );
  }
}

export default CardsList;
