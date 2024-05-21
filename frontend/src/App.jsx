import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopicListItem from 'components/TopicListItem';


// Note: Rendering a single component to build components in isolation
const App = (props) => {
  // const photos = Object.values(sampleDataForPhotoListItem);
  return (
    <div className="App">
      {/* {photos.map(photo =>
        <PhotoListItem key={photo.id} photo={photo} />
      )} */}
      <PhotoList />
    </div>
  );
};

export default App;
