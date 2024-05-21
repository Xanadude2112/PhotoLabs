import React from 'react';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <ul className="topic-list">
      {topics.map(topic => (
        <li key={topic.id}>{topic.name}</li>
      ))}
    </ul>
  );
};

export default TopicList;