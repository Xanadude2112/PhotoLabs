import React from "react";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo =>
        <PhotoListItem key={photo.id} photo={photo} />
      )}
    </ul>
  );
};

export default PhotoList;
