import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({id, fave, setFave}) => {
  const isFavourited = fave.includes(id) ? true : false;

  const faveButtonToggle = () => {
    setFave(prev => { //prev is array
      let newFave = [...prev]; //new array / new reference
      const wasFaved = prev.includes(id);
     if (wasFaved) {
      const index = newFave.indexOf(id)
      newFave.splice(index, 1);
     } else {
      newFave.push(id);
     }
     return newFave; //return updated prev
     //prev === newFave
    })
  }

  return (
    <div className="photo-list__fav-icon" onClick={faveButtonToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;