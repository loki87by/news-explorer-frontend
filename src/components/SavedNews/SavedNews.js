// *импорты
import React, { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import './SavedNews.css';

// *Функционал
function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  useEffect(() => {props.setSavedNewsPage(true);});

  // *DOM
  return (
    <main className="SavedNews">
      <CurrentUserContext.Provider value={currentUser}>
       <SavedNewsHeader
       loggedIn={props.loggedIn} />
      </CurrentUserContext.Provider>
      <NewsCardList
        loggedIn={props.loggedIn}
        isSavedNewsPage={props.isSavedNewsPage}
        setArticles={props.setArticles}
        updateSavedNews={props.updateSavedNews} />
    </main>
  )
};

// *экспорт
export default SavedNews;
