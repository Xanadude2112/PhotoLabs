import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({id, fave, setFave}) => {
  const isFavourited = fave.includes(id) ? true : false; // true or false determines the color based on if it is faved or not

  const faveButtonToggle = () => {
    setFave(favePrev => { //favePrev is array
      let newFave = [...favePrev]; //new array / new reference
      const wasFaved = favePrev.includes(id); //is already in the favePrev array
     if (wasFaved) {
      const index = newFave.indexOf(id) // the index in favePrev array
      newFave.splice(index, 1); //1 represents how many we wish to remove from 
     } else {
      newFave.push(id);
     }
     return newFave; //return updated favePrev
     //favePrev === newFave
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