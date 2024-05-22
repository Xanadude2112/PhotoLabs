import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photos,
  fave,
  setFave,
  selectedPhoto,
  setSelectedPhoto,
  modalOpen,
  setModalOpen,
  showModal,
}) => {
  if (!modalOpen) {
    return null;
  }

  const {
    photo: {
      id,
      urls: { full },
      user: { name, profile },
      location: { city, country },
    },
  } = selectedPhoto;

  console.log(id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={showModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="modal_content">
        <PhotoFavButton fave={fave} setFave={setFave} id={id} />
        <img className="photo-details-modal__image" src={full} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={profile} />
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
      <h3>Similar Photos</h3>
      <PhotoList photos={photos} fave={fave} setFave={setFave} />
    </div>
  );
};

export default PhotoDetailsModal;
