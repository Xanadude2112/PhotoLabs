import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  modalOpen,
  likeModalOpen,
  selectTopic,
  toggleFave,
  fave,
  showModal,
  showLikedPhotoModal,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} fave={fave} selectTopic={selectTopic} likeModalOpen={likeModalOpen} showLikedPhotoModal={showLikedPhotoModal}/>
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
