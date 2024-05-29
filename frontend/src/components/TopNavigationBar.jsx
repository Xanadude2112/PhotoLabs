import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, fave,  selectTopic, likedModalOpen, showLikedPhotoModal }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
        <TopicList topics={topics} selectTopic={selectTopic} />
      </div>
      <div>
        <FavBadge fave={fave} likedModalOpen={likedModalOpen} showLikedPhotoModal={showLikedPhotoModal}/>
      </div>
    </div>
  );
};

export default TopNavigation;
