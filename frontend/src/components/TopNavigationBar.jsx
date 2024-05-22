import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics , fave, setFave}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
        <TopicList topics={topics} />
      </div>
      <FavBadge fave={fave} setFave={setFave}/>
    </div>
  );
};

export default TopNavigation;