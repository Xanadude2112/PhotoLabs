import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFave = () => {
    setIsFavourite(prevIsFavourite => !prevIsFavourite);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFave}>
      <FavIcon selected={isFavourite} />
    </div>
  );
};

export default PhotoFavButton;