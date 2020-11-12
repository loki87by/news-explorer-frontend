// **импорты
import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import './styles/__title/NewsCardList__title.css';
import './styles/__container/NewsCardList__container.css';
import './styles/__button/NewsCardList__button.css';

// **Функционал
function NewsCardList(props) {
  //const [savedNews, setSavedNews] = React.useState([])
  //let localNews = JSON.parse(localNews);
  let savedNews = JSON.parse(localStorage.getItem('articles'));
  //setSavedNews(props.savedNews)
  //React.useEffect(() => {props.isSavedNewsPage && props.updateSavedNews(props.savedNews)});
  // *получаем все карточки
  const allCards = props.articles.map((article) => {
    return article
  });
  // *отбираем 3 первых в списке
  let firstNews = JSON.parse(JSON.stringify(allCards));
  firstNews.splice(3)
  const [newsCards, setNewsCards] = useState(firstNews);
  // *карточки после третьей
  let otherNews = JSON.parse(JSON.stringify(allCards));
  otherNews.splice(0, 3);
  const [hiddenNews, setHiddenNews] = useState(otherNews);
  // *подгрузка следующей тройки
  let moreNews = [];
  function getMoreNews() {
    if (hiddenNews.length > 3) {
      hiddenNews.splice(0, 3);
      let other = hiddenNews;
      moreNews = JSON.parse(JSON.stringify(hiddenNews)).slice(0, 3);
      setHiddenNews(other);
      let plusNews = newsCards.concat(moreNews);
      setNewsCards(plusNews);
    }
    return
  }

  // **DOM
  return (
    <article className="NewsCardList">
      {props.isSavedNewsPage ?
      <section className='NewsCardList__container'>
      {/*props.*/savedNews.map((article) => (
        <NewsCard key={article._id}
          NewsCard={NewsCard}
          loggedIn={props.loggedIn}
          isSavedNewsPage={props.isSavedNewsPage}
          articles={props.articles}
          article={article}
          keyword={props.keyword}
          savedNews={props.savedNews}
          saveArticle={props.saveArticle}
          updateLocalStorage={props.updateLocalStorage}
          /*updateSavedNews={setSavedNews/*props.updateSavedNews}*/ />
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
              articles={props.articles}
              article={article}
              savedNews={props.savedNews}
              keyword={props.keyword}
              saveArticle={props.saveArticle}
              updateLocalStorage={props.updateLocalStorage}
              /*updateSavedNews={setSavedNews/*props.updateSavedNews}*/ />
          ))}
        </section>
        {hiddenNews.length > 3 ? <button type="button" className="NewsCardList__button" onClick={getMoreNews}>Показать еще</button> : '' }
      </>}
    </article>
  )
};

// **экспорт
export default NewsCardList;
