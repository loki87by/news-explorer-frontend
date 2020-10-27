// **импорты
import React from 'react';
import articles from '../../utils/articles'
import './SearchForm.css';
import '../../blocks/SearchForm/__title/SearchForm__title.css';
import '../../blocks/SearchForm/__text/SearchForm__text.css';
import '../../blocks/SearchForm/__form/SearchForm__form.css';
import '../../blocks/SearchForm/__input/SearchForm__input.css';
import '../../blocks/SearchForm/__button/SearchForm__button.css';

// **Функционал
function SearchForm(props) {
  const[keyword, setKeyword] = React.useState('');

  function searchNews() {
    if (props.isDataLoaded) {
      props.setResponseSending(false)
      props.setDataLoaded(false)
      props.setArticles([])
    }
    props.setResponseSending(true)
    const search = articles.map((article) => {
      let keyNews = {};
      Object.values(article).forEach((k) => {
        if (k.includes(keyword)){
          return keyNews = article;
        };
      })
      return keyNews;
    })
    const news = search.filter((item) => {
      return Object.keys(item).length !== 0
    });
    if (news.length !== 0) {
      props.setDataLoaded(true)
      props.setArticles(news)
      return
    } else {
      props.setSearchError('По вашему запросу ничего не найдено')
    }
  };

  return (
    <section className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="SearchForm__form">
        <input className="SearchForm__input" type='text' placeholder='Введите тему новости' onChange={e => setKeyword(e.target.value)} value={keyword} id="search" name="search" />
        <button className="SearchForm__button" type='button' onClick={ searchNews }>Искать</button>
      </form>
    </section>
  )
};

export default SearchForm;
