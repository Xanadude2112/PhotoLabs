import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, fave }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
        <TopicList topics={topics} />
      </div>
      <FavBadge fave={fave} />
    </div>
  );
};

export default TopNavigation;
