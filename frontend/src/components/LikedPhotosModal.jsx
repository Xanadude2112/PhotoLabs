import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import LikedPhotoList from "./LikedPhotoList";

const LikedPhotoModal = ({
  photos,
  likeModalOpen,
  toggleFave,
  fave,
  showModal,
  showLikedPhotoModal,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  if (!likeModalOpen) {
    return null;
  }

  console.log(photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={showLikedPhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="modal_content">
        {fave.length > 0 ? (
          <LikedPhotoList
            photos={photos}
            toggleFave={toggleFave}
            fave={fave}
            showLikedPhotoModal={showLikedPhotoModal}
            showModal={showModal}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        ) : (
          "No liked photos"
        )}
      </div>
    </div>
  );
};

export default LikedPhotoModal;
