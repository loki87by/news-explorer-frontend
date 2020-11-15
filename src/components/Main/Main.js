// **импорты
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import './Main.css';

// **Функционал
function Main(props) {
  return (
    <main className="Main">
      {props.isResponseSending
        ? (props.isDataLoaded
          ? <NewsCardList
              loggedIn={props.loggedIn}
              isSavedNewsPage={props.isSavedNewsPage}
              articles={props.articles}
              setArticles={props.setArticles}
              savedNews={props.savedNews}
              updateSavedNews={props.updateSavedNews}
              keyword={props.keyword} />
          : <Preloader searchError={props.searchError} />)
        : ''}
      <About />
    </main>
  )
};

// **экспорт
export default Main;
