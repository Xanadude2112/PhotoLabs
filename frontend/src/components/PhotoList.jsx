import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, fave, setFave }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo =>
        <PhotoListItem key={photo.id} photo={photo} fave={fave} setFave={setFave}/>
      )}
    </ul>
  );
};

export default PhotoList;