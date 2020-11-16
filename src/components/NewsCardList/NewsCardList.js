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
  let savedNews = JSON.parse(localStorage.getItem('articles'));

  // *получаем массив сохраненных новостных карточек
  let getNews = JSON.parse(localStorage.getItem('news'));

  // *отбираем 3 первых в списке
  let firstNews = getNews.slice(0, 3);

  // *устанавливаем отображаемые на странице карточки
  const [newsCards, setNewsCards] = useState(firstNews);

  // *карточки после третьей
  let otherNews = getNews.slice(3);

  // *скрытые карточки
  const [hiddenNews, setHiddenNews] = useState(otherNews);

  // *подгрузка следующей тройки
  function getMoreNews() {
    let moreNews = hiddenNews.slice(0, 3);
    let other = hiddenNews.slice(3);
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
