// **импорты
import React from 'react';
import NewsCardPanel from '../NewsCardPanel/NewsCardPanel';
import './NewsCard.css';
import '../../blocks/NewsCard/__image/NewsCard__image.css';
import '../../blocks/NewsCard/__text-content/NewsCard__text-content.css';
import '../../blocks/NewsCard/__date/NewsCard__date.css';
import '../../blocks/NewsCard/__title/NewsCard__title.css';
import '../../blocks/NewsCard/__text/NewsCard__text.css';
import '../../blocks/NewsCard/__source/NewsCard__source.css';

// **Функционал
function NewsCard(props) {
  return (
    <section className="NewsCard">
      <img className="NewsCard__image" src={require(`../../images/${props.article.image}`)} alt='caption'/>
      <NewsCardPanel loggedIn={props.loggedIn} article={props.article} isSavedNewsPage={props.isSavedNewsPage} />
      <p className="NewsCard__text-content NewsCard__date">{props.article.date}</p>
      <h1 className="NewsCard__text-content NewsCard__title">{props.article.name}</h1>
      <h2 className="NewsCard__text-content NewsCard__text">{props.article.text}</h2>
      <h3 className="NewsCard__text-content NewsCard__source">{props.article.source}</h3>
    </section>
  )
};

export default NewsCard;
