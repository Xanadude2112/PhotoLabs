import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

// lifting state: need to move usestate to parent component

const HomeRoute = ({ photos, topics, modalOpen, setModalOpen }) => {
  const [ fave, setFave ] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} fave={fave} setFave={setFave}/>
      <PhotoList photos={photos} fave={fave} setFave={setFave} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default HomeRoute;