import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, selectTopic }) => {
  const { id, title } = topic;

  const handleClick = () => {
    selectTopic(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
