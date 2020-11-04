// **импорты
import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import './styles/__title/NewsCardList__title.css';
import './styles/__container/NewsCardList__container.css';
import './styles/__button/NewsCardList__button.css';

// **Функционал
function NewsCardList(props) {
  const allCards = props.articles.map((article) => {
    return article
  });
  let firstNews = JSON.parse(JSON.stringify(allCards));
  firstNews.splice(3)
  const [newsCards, setNewsCards] = useState(firstNews);
  let otherNews = JSON.parse(JSON.stringify(allCards));
  const [hiddenNews, setHiddenNews] = useState(otherNews.length)
  let moreNews;
  function getMoreNews() {
    if (otherNews.length > 3) {
      otherNews.splice(0, 3);
      moreNews = JSON.parse(JSON.stringify(otherNews)).slice(0, 3);
      setHiddenNews(otherNews.length)
      firstNews = firstNews.concat(moreNews);
      setNewsCards(firstNews);
    }
    return
  }
  return (
    <article className="NewsCardList">
      {props.isSavedNewsPage ?
      <section className='NewsCardList__container'>
      {props.savedNews.map((article, i) => (
        <NewsCard key={i} article={article} articles={props.articles} updateSavedNews={props.updateSavedNews} savedNews={props.savedNews} loggedIn={props.loggedIn} isSavedNewsPage={props.isSavedNewsPage} NewsCard={NewsCard} />
      ))}
      </section>:
      <>
        <h1 className="NewsCardList__title">Результаты поиска</h1>
        <section className='NewsCardList__container'>
          {newsCards.map((article, i) => (
            <NewsCard key={i} article={article} articles={props.articles} updateSavedNews={props.updateSavedNews} savedNews={props.savedNews} loggedIn={props.loggedIn} isSavedNewsPage={props.isSavedNewsPage} NewsCard={NewsCard} />
          ))}
        </section>
        {hiddenNews > 3 ? <button type="button" className="NewsCardList__button" onClick={getMoreNews}>Показать еще</button> : '' }
      </>}
    </article>
  )
};

export default NewsCardList;
