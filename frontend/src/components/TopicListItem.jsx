import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({topic: {id, slug, title}}) => {
  return (
    <div className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
