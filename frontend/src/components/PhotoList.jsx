import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, fave, setFave, modalOpen, setModalOpen, showModal, selectedPhoto, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo =>
        <PhotoListItem key={photo.id} photo={photo} fave={fave} setFave={setFave} modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
      )}
    </ul>
  );
};

export default PhotoList;