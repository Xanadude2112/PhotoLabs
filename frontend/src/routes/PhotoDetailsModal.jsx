import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  selectedPhoto,
  setSelectedPhoto,
  modalOpen,
  showModal,
}) => {
  if (!modalOpen) {
    return null;
  }
  
  const {photo:{
    id,
    urls: { full },
    user: { name, profile },
    location: { city, country }
  }
  } = selectedPhoto;

  console.log(id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={showModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <img className="photo-details-modal__image" src={full} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={profile} />
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
    </div>
  );
};

export default PhotoDetailsModal;
