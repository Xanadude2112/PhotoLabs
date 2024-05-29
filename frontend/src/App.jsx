import React from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import LikedPhotoModal from "components/LikedPhotosModal";

const App = () => {
  const {
    state,
    selectTopic,
    toggleFave,
    setSelectedPhoto,
    showModal,
    showLikedPhotoModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        toggleFave={toggleFave}
        selectTopic={selectTopic}
        fave={state.fave}
        modalOpen={state.modalOpen}
        likeModalOpen={state.likeModalOpen}
        showModal={showModal}
        showLikedPhotoModal={showLikedPhotoModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      <PhotoDetailsModal
        photos={state.photos}
        toggleFave={toggleFave}
        fave={state.fave}
        modalOpen={state.modalOpen}
        showModal={showModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      <LikedPhotoModal
        photos={state.photos}
        toggleFave={toggleFave}
        fave={state.fave}
        likeModalOpen={state.likeModalOpen}
        showModal={showModal}
        showLikedPhotoModal={showLikedPhotoModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default App;
