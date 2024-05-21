import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFave = () => {
    setIsFavourite(prevIsFavourite => !prevIsFavourite);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFave}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;