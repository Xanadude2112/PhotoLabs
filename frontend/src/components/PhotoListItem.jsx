import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo: {imageSource, profile, username, location: {city, country}}}) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img className="image-source" src={imageSource}/>
      <img className="profile" src={profile}/>
      <p className="username">{username}</p>
      <p className="location">{city}, {country}</p>
    </div>
  );
};

export default PhotoListItem;
