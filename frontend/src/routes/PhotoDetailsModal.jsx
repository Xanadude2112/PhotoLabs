import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({modalOpen, showModal}) => {
if(!modalOpen){
  return null;
}
  return (
      <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={showModal} />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
