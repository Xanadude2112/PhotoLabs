import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({imageSouce, profile, username, location}) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img className="image-source" src={imageSouce}/>
      <img className="profile" src={profile}/>
      <p className="username">{username}</p>
      <p className="location">{location}</p>
    </div>
  );
};

export default PhotoListItem;
