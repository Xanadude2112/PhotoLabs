import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ fave, likeModalOpen, showLikedPhotoModal }) => {
const likedPhotos = () => {
  showLikedPhotoModal();
}

  return (
    <div className="fav-badge" onClick={likedPhotos}>
      <FavIcon selected={fave} displayAlert={fave.length > 0}/>
    </div>
  );
};

export default FavBadge;
