import React, { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const {
    modalOpen,
    setModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    fave,
    setFave,
    showModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} fave={fave} setFave={setFave} modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
      <PhotoDetailsModal photos={photos}fave={fave} setFave={setFave} modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
    </div>
  );
};

export default App;
