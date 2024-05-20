import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

const sampleDataForPhotoListItem = {
  "1": {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada"
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  },
  "2": {
    id: "2",
    location: {
      city: "Montreal",
      country: "Canada"
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  },
  "3": {
    id: "3",
    location: {
      city: "Montreal",
      country: "Canada"
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
};

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  return (
    <div className="App">
      <PhotoListItem photo={sampleDataForPhotoListItem["1"]}/>
      <PhotoListItem photo={sampleDataForPhotoListItem["2"]}/>
      <PhotoListItem photo={sampleDataForPhotoListItem["3"]}/>
    </div>
  );
};

export default App;
