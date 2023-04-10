import React from 'react';
import './modal.css';
import { Item } from '../CardsList/interfaces/cardslist.interface';

interface ModalProps {
  toggl: (e: React.SyntheticEvent) => void;
  isModalOpen: boolean;
  modalInfo: Item;
}

function Modal({ toggl, isModalOpen, modalInfo }: ModalProps) {
  if (!isModalOpen) return null;
  const { snippet } = modalInfo;
  return (
    <>
      <div className="darkBG" role="presentation" onClick={toggl} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
            <button type="button" className="closeBtn" onClick={toggl}>
              ✖
            </button>
          </div>
          <img src={snippet.thumbnails.high.url} alt="card" />
        </div>
      </div>
    </>
  );
}

export default Modal;
