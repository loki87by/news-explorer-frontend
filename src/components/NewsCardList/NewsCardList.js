// **импорты
import React from 'react';
import NewsCard from './NewsCard';
import './NewsCardList.css';
//принимает пропсы articles и isSavedNewsPage

// **Функционал
function NewsCardList(props) {
  const allCards = props.articles.map((article) => {
    return article
  });
  let firstNews = allCards.slice(0, 3);
  let otherNews = allCards;
  let moreNews;
  function getMoreNews() {
    if (otherNews.length > 3) {
      otherNews.splice(0, 3);
      moreNews = otherNews.slice(0, 3);
      return firstNews.append(moreNews)
    }
    return
  }
  return (
    <div className="NewsCardList">
      {props.isSavedNewsPage ? '' : <h1 className="NewsCardList__title">Результаты поиска</h1>}
      {firstNews.map((article) => (
        <NewsCard key={article._id} NewsCard={NewsCard} />
      ))}
      <button type="button" className="NewsCardList__button" onClick={getMoreNews}>Показать еще</button>
    </div>
  )
};

export default NewsCardList;
