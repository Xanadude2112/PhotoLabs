import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  toggleFave,
  fave,
  modalOpen,
  showModal,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFave={toggleFave}
          fave={fave}
          modalOpen={modalOpen}
          showModal={showModal}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
