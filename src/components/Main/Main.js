// **импорты
import React from 'react';
import SearchForm from '../SearchForm';
import NewsCardList from '../NewsCardList';
import Preloader from './Preloader';
import About from '../About';
import './Main.css';
// принимает пропсы isResponseSending и isDataLoaded

// **Функционал
function Main(props) {
  return (
    <main className="Main">
      <SearchForm />
      {props.isResponseSending ? (props.isDataLoaded ? <NewsCardList /> : <Preloader />) : ''}
      <About />
    </main>
  )
};

export default Main;
