// **импорты
import React from 'react';
import './SearchForm.css';
import '../../blocks/SearchForm/__title/SearchForm__title/css';
import '../../blocks/SearchForm/__text/SearchForm__text/css';
import '../../blocks/SearchForm/__form/SearchForm__form/css';
import '../../blocks/SearchForm/__input/SearchForm__input/css';
import '../../blocks/SearchForm/__button/SearchForm__button/css';

// **Функционал
function SearchForm() {
  return (
    <section className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="SearchForm__form">
        <input className="SearchForm__input" type='text' placeholder='Введите тему новости' />
        <button className="SearchForm__button" type='submit'>Искать</button>
      </form>
    </section>
  )
};

export default SearchForm;
