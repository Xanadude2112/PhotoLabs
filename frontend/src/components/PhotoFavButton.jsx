import React from 'react';
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ id, toggleFave, favourited }) => {
  // const isFavourited = fave.includes(id); // true or false determines the color based on if it is faved or not

  const faveButtonToggle = () => {
    toggleFave(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={faveButtonToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
