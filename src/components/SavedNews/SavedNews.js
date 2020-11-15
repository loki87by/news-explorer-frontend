// **импорты
import React, { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

// **Функционал
function SavedNews(props) {
  useEffect(() => {props.setSavedNewsPage(true);});


  // **DOM
  return (
    <main className="SavedNews">
       <SavedNewsHeader
        currentUser={props.currentUser}
        savedNews={props.savedNews} />
      <NewsCardList
        loggedIn={props.loggedIn}
        isSavedNewsPage={props.isSavedNewsPage}
        articles={props.articles}
        setArticles={props.setArticles}
        savedNews={props.savedNews}
        updateSavedNews={props.updateSavedNews} />
    </main>
  )
};

// **экспорт
export default SavedNews;
