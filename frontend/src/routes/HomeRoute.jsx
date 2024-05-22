import React from "react";
import { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

// lifting state: need to move usestate to parent component

const HomeRoute = ({
  photos,
  topics,
  modalOpen,
  toggleFave,
  fave,
  showModal,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} fave={fave} />
      <PhotoList
        photos={photos}
        toggleFave={toggleFave}
        fave={fave}
        modalOpen={modalOpen}
        showModal={showModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
