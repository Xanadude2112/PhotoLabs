import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo: {
    id,
    urls: { full },
    user: { name, profile },
    location: { city, country },
  },
  fave,
  setFave,
  modalOpen,
  setModalOpen,
  showModal,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  /* Insert React */

  const photoSelect = () => {
    showModal();
    setSelectedPhoto({
      photo: {
        id,
        urls: { full },
        user: { name, profile },
        location: { city, country },
      },
    });
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} fave={fave} setFave={setFave} />
      <img className="photo-list__image" src={full} onClick={photoSelect} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p>{name}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
