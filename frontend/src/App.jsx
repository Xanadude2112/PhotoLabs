import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <PhotoList />
      <div className="top-nav-bar__topic-list">
        <TopicList />
      </div>
    </div>
  );
};

export default App;
