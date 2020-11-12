// **импорты
import React, { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

// **Функционал
function SavedNews(props) {
  //let savedNews = JSON.parse(localStorage.getItem('articles'));

  useEffect(() => {props.setSavedNewsPage(true);});
  useEffect(() => {
    if (props.savedNews.length > 0) {
      hashtagger()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // *отбор по ключевым словам
  const [hashtags, setHashtags] = React.useState([])
  let hashtagger = () => {
    let tags = props.savedNews.map((item) => {
        return item.keyword;
      })
    setHashtags(tags)
  }

  // **DOM
  return (
    <main className="SavedNews">
       <SavedNewsHeader
        currentUser={props.currentUser}
        savedNews={props.savedNews}
        //newsQuantity={newsQuantity}
        hashtags={hashtags}/>
      <NewsCardList
        loggedIn={props.loggedIn}
        isSavedNewsPage={props.isSavedNewsPage}
        articles={props.articles}
        savedNews={props.savedNews}
        updateLocalStorage={props.updateLocalStorage}
        //updateSavedNews={setSavedNews}
        hashtags={hashtags}/>
    </main>
  )
};

// **экспорт
export default SavedNews;
