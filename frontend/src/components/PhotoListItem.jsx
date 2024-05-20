import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo: {imageSource, profile, username, location: {city, country}}}) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
    <img className="photo-list__image" src={imageSource}/>
    <img className="photo-list__user-profile" src={profile}/>
    <div className="photo-list__user-details">
      <p className="photo-list__user-info">{username}</p>
      <p className="photo-list__user-location">{city}, {country}</p>
    </div>
  </div>
  );
};

export default PhotoListItem;
