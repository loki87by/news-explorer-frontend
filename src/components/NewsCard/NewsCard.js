// **импорты
import React from 'react';
import './NewsCard.css';

// **Функционал
function NewsCard() {
  return (
    <section className="NewsCard">
      <img className="NewsCard__image" alt='caption'/>
      <button className="NewsCard__button"></button>
      <p className="NewsCard__text-content NewsCard__date">Дата статьи</p>
      <h1 className="NewsCard__text-content NewsCard__title">Название статьи</h1>
      <h2 className="NewsCard__text-content NewsCard__text">Текст статьи</h2>
      <h3 className="NewsCard__text-content NewsCard__source">Источник статьи</h3>
    </section>
  )
};

export default NewsCard;
