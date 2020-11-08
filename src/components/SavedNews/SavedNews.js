// **импорты
import React, { useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

// **Функционал
function SavedNews(props) {
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
