// **импорты
import React, { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

// **Функционал
function SavedNews(props) {
  useEffect(() => {props.setSavedNewsPage(true);});
  // *отбор по ключевым словам
  let hashtags = [];
  let hashtagger = (() => {
    let tags =[];
    props.savedNews.map((item) => {
      console.log(props.savedNews)
      tags = Object.values(item.keyword).map(() => {
        return item.keyword;
      })
      return tags;
    })
    if (props.savedNews.length > 0) {
    hashtags = tags.reduce((tags, item) => {return tags.concat(item)})};
    return hashtags;
  })
  hashtagger()
  let newsQuantity = props.savedNews.length;

  // **DOM
  return (
    <main className="SavedNews">
      <SavedNewsHeader currentUser={props.currentUser} newsQuantity={newsQuantity} hashtags={hashtags}/>
      <NewsCardList loggedIn={props.loggedIn} savedNews={props.savedNews} updateSavedNews={props.updateSavedNews} articles={props.articles} isSavedNewsPage={props.isSavedNewsPage} hashtags={hashtags}/>
    </main>
  )
};

// **экспорт
export default SavedNews;
