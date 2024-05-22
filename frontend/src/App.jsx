import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [ modalOpen, setModalOpen ] = useState(false);


  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <PhotoDetailsModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default App;
