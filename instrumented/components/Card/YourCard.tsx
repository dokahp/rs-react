import React from 'react';
import './yourcard.css';
import dateFormatting from '../../utility/dateFormatting';

export interface YourCardProps {
  file: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  videoType: string;
  adultContent: boolean;
  advertising: boolean;
}

function YourCard({
  file,
  title,
  channelTitle,
  publishedAt,
  videoType,
  adultContent,
  advertising,
}: YourCardProps) {
  const modifiedTitle = title.length > 73 ? `${title.slice(0, 73)}...` : title;
  const modifiedDate = dateFormatting(publishedAt);
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image-wrapper">
          <img src={file} alt="video-title" className="card-image" />
        </div>
        <div className="card-content-wrapper">
          <div className="title">{modifiedTitle}</div>
          <div className="channel-title">{channelTitle}</div>
          <div className="published-at">{modifiedDate}</div>
          <div className="chips-wrapper">
            <div className="chip">
              <img
                src={
                  videoType === 'Video'
                    ? './assets/video.svg'
                    : './assets/stream.svg'
                }
                alt="video-type"
              />
              <div className="chip-description">{videoType}</div>
            </div>
            <div className="chip">
              <img src="./assets/person.svg" alt="person" />
              <div className="chip-description">
                {!adultContent ? '18+' : '3+'}
              </div>
            </div>
            {advertising ? (
              <div className="chip">
                <img src="./assets/advertising.svg" alt="advertising" />
                <div className="chip-description">Adv</div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCard;
