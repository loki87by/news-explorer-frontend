// **импорты
import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import './styles/__title/NewsCardList__title.css';
import './styles/__container/NewsCardList__container.css';
import './styles/__button/NewsCardList__button.css';

// **Функционал
function NewsCardList(props) {
  // *получаем массив найденных новостных карточек
  const savedNews = JSON.parse(localStorage.getItem('articles'));

  // *получаем массив сохраненных новостных карточек
  let getNews = JSON.parse(localStorage.getItem('news'));

  // *отбираем 3 первых в списке
  let firstNews = [];
  function firstNewsCutter() {
    if ((getNews !== null) && (getNews !== undefined)) {
      firstNews = getNews.slice(0, 3);
    }
  }
  firstNewsCutter()

  // *устанавливаем отображаемые на странице карточки
  const [newsCards, setNewsCards] = useState(firstNews);

  // *карточки после третьей
  let otherNews = [];
  function otherNewsCutter() {
    if ((getNews !== null) && (getNews !== undefined)) {
      otherNews = getNews.slice(3);
    }
  }
  otherNewsCutter()

  // *скрытые карточки
  const [hiddenNews, setHiddenNews] = useState(otherNews);

  // *подгрузка следующей тройки
  function getMoreNews() {
    const moreNews = hiddenNews.slice(0, 3);
    const other = hiddenNews.slice(3);
    setHiddenNews(other);
    setNewsCards([...newsCards, ...moreNews]);
  }

  // **DOM
  return (
    <article className="NewsCardList">
      {props.isSavedNewsPage ?
      <section className='NewsCardList__container'>
      {savedNews.map((article) => (
        <NewsCard key={article._id}
          NewsCard={NewsCard}
          loggedIn={props.loggedIn}
          isSavedNewsPage={props.isSavedNewsPage}
          setArticles={props.setArticles}
          article={article}
          keyword={props.keyword}
          updateSavedNews={props.updateSavedNews} />
      ))}
      </section>:
      <>
        <h1 className="NewsCardList__title">Результаты поиска</h1>
        <section className='NewsCardList__container'>
          {newsCards.map((article, i) => (
            <NewsCard key={i}
              NewsCard={NewsCard}
              loggedIn={props.loggedIn}
              isSavedNewsPage={props.isSavedNewsPage}
              setArticles={props.setArticles}
              article={article}
              keyword={props.keyword}
              updateSavedNews={props.updateSavedNews}
              setRegisterPopupOpen={props.setRegisterPopupOpen} />
          ))}
        </section>
        {hiddenNews.length > 0 ? <button type="button" className="NewsCardList__button" onClick={getMoreNews}>Показать еще</button> : '' }
      </>}
    </article>
  )
};

// **экспорт
export default NewsCardList;
