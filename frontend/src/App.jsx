import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const showModal = () => {
    console.log("here")
    setModalOpen(!modalOpen);
  };


  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal}/>
      <PhotoDetailsModal modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal}/>
    </div>
  );
};

export default App;
