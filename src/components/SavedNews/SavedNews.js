// **импорты
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

// **Функционал
function SavedNews() {
  return (
    <main className="SavedNews">
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  )
};

export default SavedNews;
