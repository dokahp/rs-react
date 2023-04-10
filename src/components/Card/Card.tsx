import React from 'react';
import { Snippet } from '../CardsList/interfaces/cardslist.interface';
import './card.css';

type Props = {
  snippet: Snippet;
  videoId: string;
  openModal: (videoId: string) => void;
};

function Card({ videoId, snippet, openModal }: Props) {
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div
      className="card-wrapper"
      role="presentation"
      onClick={() => openModal(videoId)}
    >
      <div className="card">
        <div className="card-image-wrapper">
          <img
            src={thumbnails.high ? thumbnails.high.url : thumbnails.medium.url}
            alt="video-title"
            className="card-image"
          />
        </div>
        <div className="card-content-wrapper">
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
      </div>
    </div>
  );
}

export default Card;
