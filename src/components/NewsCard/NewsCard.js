// **импорты
import React from 'react';
import NewsCardPanel from '../NewsCardPanel/NewsCardPanel';
import './NewsCard.css';
import './styles/__image/NewsCard__image.css';
import './styles/__text-content/NewsCard__text-content.css';
import './styles/__date/NewsCard__date.css';
import './styles/__title/NewsCard__title.css';
import './styles/__text/NewsCard__text.css';
import './styles/__source/NewsCard__source.css';

// **Функционал
function NewsCard(props) {
  return (
    <section className="NewsCard">
      <img className="NewsCard__image" src={props.article.image} alt='caption'/>
      <NewsCardPanel
        loggedIn={props.loggedIn}
        isSavedNewsPage={props.isSavedNewsPage}
        articles={props.articles}
        article={props.article}
        setArticles={props.setArticles}
        keyword={props.keyword}
        savedNews={props.savedNews}
        saveArticle={props.saveArticle}
        updateSavedNews={props.updateSavedNews} />
      <p className="NewsCard__text-content NewsCard__date">{props.article.date}</p>
      <h1 className="NewsCard__text-content NewsCard__title">{props.article.title}</h1>
      <h2 className="NewsCard__text-content NewsCard__text">{props.article.text}</h2>
      <h3 className="NewsCard__text-content NewsCard__source">{props.article.source}</h3>
    </section>
  )
};

// **экспорт
export default NewsCard;
