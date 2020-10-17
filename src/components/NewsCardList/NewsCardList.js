// **импорты
import React from 'react';
import NewsCard from './NewsCard';
import './NewsCardList.css';

// **Функционал
function NewsCardList(props) {
  return (
    <div className="NewsCardList">
      {props.articles.map((article) => (
        <NewsCard key={article._id} NewsCard={NewsCard} />
      ))}
    </div>
  )
};

export default NewsCardList;
