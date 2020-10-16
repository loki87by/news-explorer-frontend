// **импорты
import React from 'react';
import SearchForm from '../SearchForm';
import NewsCardList from '../NewsCardList';
import About from '../About';
import './Main.css';

// **Функционал
function Main() {
  return (
    <main className="Main">
      <SearchForm />
      <NewsCardList />
      <About />
    </main>
  )
};

export default Main;
