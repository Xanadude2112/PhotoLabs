import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo: {imageSource, profile, username, location: {city, country}}}) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{city}, {country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
