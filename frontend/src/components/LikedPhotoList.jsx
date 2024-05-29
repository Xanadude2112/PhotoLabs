import React from "react";
import "../styles/PhotoList.scss";
import LikedPhotoListItem from "./LikedPhotoListItem";

const LikedPhotoList = ({
  photos,
  toggleFave,
  fave,
  modalOpen,
  showModal,
  selectedPhoto,
  setSelectedPhoto
}) => {
  console.log(photos);
  return (
    <ul className="photo-list">
      {photos.map(
        (photo) =>
          fave.includes(photo.id) && (
            <LikedPhotoListItem
              key={photo.id}
              photo={photo}
              toggleFave={toggleFave}
              fave={fave}
              modalOpen={modalOpen}
              showModal={showModal}
              selectedPhoto={selectedPhoto}
              setSelectedPhoto={setSelectedPhoto}
            />
          )
      )}
    </ul>
  );
};

export default LikedPhotoList;
