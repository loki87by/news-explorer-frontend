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
      {props.isResponseSending ? (props.isDataLoaded ? <NewsCardList loggedIn={props.loggedIn} articles={props.articles} isSavedNewsPage={props.isSavedNewsPage} /> : <Preloader searchError={props.searchError} />) : ''}
      <About />
    </main>
  )
};

export default Main;
