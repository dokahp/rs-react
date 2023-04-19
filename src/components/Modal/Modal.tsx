import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './modal.css';
import { Item } from '../CardsList/interfaces/cardslist.interface';
import { VideoDetails } from './interfaces/videoDetail.interface';
import { ChannelDetail } from './interfaces/channelDetail.interface';
import bigNumbersConverter from '../../utility/intToString';

interface ModalProps {
  toggl: (e: React.SyntheticEvent) => void;
  isModalOpen: boolean;
  modalInfo: Item;
}

const CHANNELBASEURL =
  'https://www.googleapis.com/youtube/v3/channels?part=id,snippet,statistics';

const VIDEOBASEURL =
  'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics';

function Modal({ toggl, isModalOpen, modalInfo }: ModalProps) {
  const { videoId } = modalInfo.id;
  const { channelId } = modalInfo.snippet;
  const [detailedInfo, setDetailedInfo] = useState<VideoDetails>();
  const [channelDetailInfo, setChannelDetailInfo] = useState<ChannelDetail>();
  const [errorObj, setErrorObj] = useState({ code: '', message: '' });
  const [fullDescription, setFullDescription] = useState(false);

  useEffect(() => {
    const getVideoDataById = async () => {
      const key = import.meta.env.VITE_YOUTUBE_API_KEY;
      const URL = `${VIDEOBASEURL}&id=${videoId}&key=${key}`;
      try {
        const { data } = await axios.get(URL);
        setDetailedInfo(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorObj({ code: error.code || '', message: error.message });
        }
      }
    };

    if (videoId && isModalOpen) {
      getVideoDataById();
    }
  }, [videoId, isModalOpen]);

  useEffect(() => {
    const getChannelDataById = async () => {
      const key = import.meta.env.VITE_YOUTUBE_API_KEY;
      const URL = `${CHANNELBASEURL}&id=${channelId}&key=${key}`;
      try {
        const { data } = await axios.get(URL);
        setChannelDetailInfo(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorObj({ code: error.code || '', message: error.message });
        }
      }
    };
    if (channelId && isModalOpen) {
      getChannelDataById();
    }
  }, [channelId, isModalOpen]);

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
    channelDetailInfo?.items[0].statistics.subscriberCount || 0
  );
  const viewsCount = bigNumbersConverter(
    detailedInfo?.items[0].statistics.viewCount || 0
  );
  const likesCount = bigNumbersConverter(
    detailedInfo?.items[0].statistics.likeCount || 0
  );
  const commentsCount = bigNumbersConverter(
    detailedInfo?.items[0].statistics.commentCount || 0
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
                src={channelDetailInfo?.items[0].snippet.thumbnails.default.url}
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
              {fullDescription
                ? detailedInfo?.items[0].snippet.description
                : snippet.description}
              <button
                type="button"
                className="view-full-btn"
                onClick={() => setFullDescription((prev: boolean) => !prev)}
              >
                {fullDescription && !errorObj.code ? 'Hide full' : 'View full'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
