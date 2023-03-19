import React from 'react';
import { Snippet } from '../CardsList/interfaces/cardslist.interface';
import './card.css';

type Props = {
  snippet: Snippet;
};

class Card extends React.PureComponent<Props, Snippet> {
  constructor(props: Props) {
    super(props);
    const { snippet } = this.props;
    this.state = { ...snippet };
  }

  render() {
    const { title, channelTitle, thumbnails, publishedAt } = this.state;

    return (
      <div className="card-wrapper">
        <img
          src={thumbnails.high ? thumbnails.high.url : thumbnails.medium.url}
          alt="video-title"
          className="card-image"
        />
        <div className="title">
          {title.length > 73 ? `${title.slice(0, 73)}...` : title}
        </div>
        <div className="channel-title">{channelTitle}</div>
        <div className="published-at">
          {new Date(publishedAt).toLocaleString('ru-Ru', {
            second: undefined,
            hour: 'numeric',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    );
  }
}

export default Card;
