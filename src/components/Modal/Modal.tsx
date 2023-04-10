import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './modal.css';
import { Item } from '../CardsList/interfaces/cardslist.interface';
import { VideoDetails } from './modal.interface';

interface ModalProps {
  toggl: (e: React.SyntheticEvent) => void;
  isModalOpen: boolean;
  modalInfo: Item;
}

function Modal({ toggl, isModalOpen, modalInfo }: ModalProps) {
  const { videoId } = modalInfo.id;
  // const { channelId } = modalInfo.snippet;
  const [detailedInfo, setDetailedInfo] = useState<VideoDetails>();
  const [fullDescription, setFullDescription] = useState(false);

  const intToString = (num: number | string) => {
    const number = num.toString().replace(/[^0-9.]/g, '');
    if (Number(number) < 1000) {
      return number;
    }
    const si = [
      { v: 1e3, s: 'K' },
      { v: 1e6, s: 'M' },
      { v: 1e9, s: 'B' },
      { v: 1e12, s: 'T' },
      { v: 1e15, s: 'P' },
      { v: 1e18, s: 'E' },
    ];
    let index;
    for (index = si.length - 1; index > 0; index -= 1) {
      if (Number(num) >= si[index].v) {
        break;
      }
    }
    return (
      (Number(num) / si[index].v)
        .toFixed(2)
        .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s
    );
  };

  useEffect(() => {
    const getVideoDataById = async () => {
      const URL = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&id=${videoId}&key=AIzaSyCKYMT0xKGJddBlTYcwsF_ORA_g9pb3cKg`;
      try {
        const { data } = await axios.get(URL);
        setDetailedInfo(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    if (videoId) {
      console.log('VIDEO DETAILS INFORMATION MUST BE FETCHED');
    }
  }, [videoId]);

  if (!isModalOpen) return null;
  const { snippet } = modalInfo;
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
              <div className="content-heading">Channel:</div>
              {snippet.channelTitle}
            </div>
            <div className="modalPublishedAt">
              <div className="content-heading">Published At: </div>
              {new Date(snippet.publishedAt).toLocaleString('ru-Ru', {
                second: undefined,
                hour: 'numeric',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="modalDescription">
              <div className="statistics">
                <div className="views-count">
                  👁{' '}
                  {intToString(
                    detailedInfo?.items[0].statistics.viewCount || 0
                  )}
                </div>
                <div className="likes-count">
                  👍{' '}
                  {intToString(
                    detailedInfo?.items[0].statistics.likeCount || 0
                  )}
                </div>
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
