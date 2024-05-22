import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photos,
  toggleFave,
  fave,
  selectedPhoto,
  modalOpen,
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
    }
  } = selectedPhoto;

  console.log(id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={showModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="modal_content">
        <PhotoFavButton
          favourited={fave.includes(id)}
          toggleFave={toggleFave}
          id={id}
        />
        <img className="photo-details-modal__image" src={full} />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={profile}
          />
          <div className="photo-list__user-info">
            <p>{name}</p>
            <p className="photo-list__user-location">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
      <h3>Similar Photos</h3>
      <PhotoList photos={photos} toggleFave={toggleFave} fave={fave} />
    </div>
  );
};

export default PhotoDetailsModal;
