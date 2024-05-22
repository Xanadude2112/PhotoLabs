import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

// lifting state: need to move usestate to parent component

const HomeRoute = ({ photos, topics, modalOpen, fave, setFave, setModalOpen, showModal, selectedPhoto, setSelectedPhoto }) => {
 

  return (
    <div className="home-route">
      <TopNavigation topics={topics} fave={fave} setFave={setFave}/>
      <PhotoList photos={photos} fave={fave} setFave={setFave} modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
    </div>
  );
};

export default HomeRoute;