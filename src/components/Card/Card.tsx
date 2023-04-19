import React from 'react';
import { Snippet } from '../CardsList/interfaces/cardslist.interface';
import './card.css';
import dateFormatting from '../../utility/dateFormatting';

type Props = {
  snippet: Snippet;
  videoId: string;
  openModal: (videoId: string) => void;
};

function Card({ videoId, snippet, openModal }: Props) {
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const modifiedTitle = title.length > 73 ? `${title.slice(0, 73)}...` : title;
  const modifiedDate = dateFormatting(publishedAt);
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
          <div className="title">{modifiedTitle}</div>
          <div className="channel-title">{channelTitle}</div>
          <div className="published-at">{modifiedDate}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
