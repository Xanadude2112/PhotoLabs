import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo: { urls:{full}, user:{name, profile}, location: {city, country}}}) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <p className="photo-list__user-info">{name}</p>
        <p className="photo-list__user-location">{city}, {country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
