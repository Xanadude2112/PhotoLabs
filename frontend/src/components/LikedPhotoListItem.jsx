import React from "react";
import "../styles/PhotoListItem.scss"
import PhotoFavButton from "./PhotoFavButton";

const LikedPhotoListItem = ({
  photo: {
    id,
    urls: { full },
    user: { name, profile },
    location: { city, country },
  },
  fave,
  toggleFave,
  modalOpen,
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
      <PhotoFavButton
        id={id}
        toggleFave={toggleFave}
        favourited={fave.includes(id)}
      />
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

export default LikedPhotoListItem;




