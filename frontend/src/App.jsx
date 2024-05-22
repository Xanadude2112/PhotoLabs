import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const {
    modalOpen,
    selectedPhoto,
    setSelectedPhoto,
    toggleFave,
    state,
    fave,
    showModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleFave={toggleFave}
        fave={state.fave}
        modalOpen={state.modalOpen}
        showModal={showModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      <PhotoDetailsModal
        photos={photos}
        toggleFave={toggleFave}
        fave={state.fave}
        modalOpen={state.modalOpen}
        showModal={showModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default App;
