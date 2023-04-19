import React, { useState } from 'react';
import './modal.css';
import { Item } from '../CardsList/interfaces/cardslist.interface';
import bigNumbersConverter from '../../utility/intToString';
import videoDetailsAPI from '../../store/services/videoDetailsService';
import channelDetailsAPI from '../../store/services/channelDetailsService';

interface ModalProps {
  toggl: (e: React.SyntheticEvent) => void;
  isModalOpen: boolean;
  modalInfo: Item;
}

function Modal({ toggl, isModalOpen, modalInfo }: ModalProps) {
  const { videoId } = modalInfo.id;
  const { channelId } = modalInfo.snippet;
  const [fullDescription, setFullDescription] = useState(false);
  const videoDetails = videoDetailsAPI.useSearchQuery(videoId, {
    skip: !isModalOpen,
  });
  const channelDetails = channelDetailsAPI.useSearchQuery(channelId, {
    skip: !isModalOpen,
  });

  if (!isModalOpen) return null;
  const { snippet } = modalInfo;
  const modifiedDate = new Date(snippet.publishedAt).toLocaleString('ru-Ru', {
    second: undefined,
    hour: 'numeric',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    minute: '2-digit',
  });
  const subscribersCount = bigNumbersConverter(
    channelDetails.data?.items[0].statistics.subscriberCount || 0
  );
  const viewsCount = bigNumbersConverter(
    videoDetails.data?.items[0].statistics.viewCount || 0
  );
  const likesCount = bigNumbersConverter(
    videoDetails.data?.items[0].statistics.likeCount || 0
  );
  const commentsCount = bigNumbersConverter(
    videoDetails.data?.items[0].statistics.commentCount || 0
  );
  return (
    <>
      <div className="darkBG" role="presentation" onClick={toggl} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <button type="button" className="closeBtn" onClick={toggl}>
              ✖
            </button>
          </div>
          <div className="modalContent">
            <img
              className="modal-img"
              src={snippet.thumbnails.high.url}
              alt="card"
            />
            <div className="modalTitle">{snippet.title}</div>
            <div className="modalChannelTitle">
              <img
                className="channel-logo"
                src={
                  channelDetails.data &&
                  channelDetails.data.items[0].snippet.thumbnails.default.url
                }
                alt="channel-logo"
              />
              <div className="channel-title-wrapper">
                <div className="modal-channel-title">
                  {snippet.channelTitle}
                </div>
                <div className="channel-subscribers-count">
                  {subscribersCount}
                </div>
              </div>
            </div>
            <div className="modalPublishedAt">{modifiedDate}</div>
            <div className="modalDescription">
              <div className="statistics">
                <div className="views-count">👁 {viewsCount}</div>
                <div className="likes-count">👍 {likesCount}</div>
                <div className="comments-count">💬 {commentsCount}</div>
              </div>

              <div className="content-heading">Description:</div>
              {fullDescription && videoDetails.data
                ? videoDetails.data.items[0].snippet.description
                : snippet.description}
              <button
                type="button"
                className="view-full-btn"
                onClick={() => setFullDescription((prev: boolean) => !prev)}
              >
                {fullDescription ? 'Hide full' : 'View full'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
