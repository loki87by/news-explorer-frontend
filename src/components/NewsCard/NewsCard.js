// **импорты
import React from 'react';
import NewsCardPanel from '../NewsCardPanel';
import './NewsCard.css';
import '../../blocks/NewsCard/__image/NewsCard__image.css';
import '../../blocks/NewsCard/__text-content/NewsCard__text-content.css';
import '../../blocks/NewsCard/__date/NewsCard__date.css';
import '../../blocks/NewsCard/__title/NewsCard____title.css';
import '../../blocks/NewsCard/__text/NewsCard__text.css';
import '../../blocks/NewsCard/__source/NewsCard____source.css';
//передать пропс article

// **Функционал
function NewsCard(props) {
  return (
    <section className="NewsCard">
      <img className="NewsCard__image" src={props.article.link} alt='caption'/>
      <NewsCardPanel />
      <p className="NewsCard__text-content NewsCard__date">{props.article.date}</p>
      <h1 className="NewsCard__text-content NewsCard__title">{props.article.title}</h1>
      <h2 className="NewsCard__text-content NewsCard__text">{props.article.text}</h2>
      <h3 className="NewsCard__text-content NewsCard__source">{props.article.source}</h3>
    </section>
  )
};

export default NewsCard;
