// **импорты
import React from 'react';
import * as NewsApi from '../../utils/NewsApi';
import { DEFAULT_PLACEHOLDER, NEED_KEYWORD, NOT_FIND, CONNECTED_ERROR, DEFAULT_PICTURE, NOT_EMPTY_REQUEST, HTML_UNTAGGER } from '../../utils/consts.js';
import './SearchForm.css';
import './styles/__title/SearchForm__title.css';
import './styles/__text/SearchForm__text.css';
import './styles/__form/SearchForm__form.css';
import './styles/__input/SearchForm__input.css';
import './styles/__input/_placeholder-error/SearchForm__input_placeholder-error.css';
import './styles/__button/SearchForm__button.css';

// **Функционал
function SearchForm(props) {
  // *стейты
  const[request, setRequest] = React.useState('');
  const[placeholderText, setPlaceholderText]  = React.useState(DEFAULT_PLACEHOLDER);

  // *эффект открытой страницы сохраненок
  React.useEffect(() => {props.setSavedNewsPage(false);});

  // *валидация кнопки сабмита
  function handleSearchSubmit(e) {
    e.preventDefault();
    const regex = NOT_EMPTY_REQUEST;
    if ((request.length === 0) || (regex.test(request))) {
      setPlaceholderText(NEED_KEYWORD);
    } else {
      searchNews();
      setPlaceholderText(DEFAULT_PLACEHOLDER);
    }
  }

  // *поиск новостей
  function searchNews() {
    if (props.isDataLoaded) {
      props.setResponseSending(false);
      props.setDataLoaded(false);
    }
    props.setKeyword(request);
    props.setResponseSending(true);
    NewsApi.getNews(request)
      .then((res) => {
        return res.articles;
      })
        .then((articles) => {
          let arr = [];
          arr = articles.map((item) => {
            const obj = {};
            obj.title = item.title;
            obj.keyword = request;
            const cleanText = item.description.replace(HTML_UNTAGGER, "");
            obj.text = cleanText;
            const date = new Date(item.publishedAt);
            const rusDate = date.toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            const dateArr = rusDate.split(' ');
            const start = dateArr.slice(0, 2).join(' ');
            const end = dateArr.slice(2).join(' ');
            const comma = start.concat(', ').concat(end);
            obj.date = comma;
            obj.source = item.source.name;
            obj.link = item.url;
            if (!item.urlToImage) {
              obj.image = DEFAULT_PICTURE
            } else {
            obj.image = item.urlToImage
            };
            return obj;
          });
          if (arr.length !== 0) {
            const setNews = JSON.stringify(arr);
            localStorage.setItem('news', setNews);
            const getNews = JSON.parse(localStorage.getItem('news'));
            props.setArticles(getNews);
            props.setDataLoaded(true);
          } else {
            props.setSearchError(NOT_FIND);
          }
        })
      .catch((err) => {
        props.setSearchError(CONNECTED_ERROR);
      });
    props.scroller();
  };

  // *DOM
  return (
    <article className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="SearchForm__form">
        <input required className={`SearchForm__input ${placeholderText === NEED_KEYWORD && "SearchForm__input_placeholder-error"}`} type='text' placeholder={placeholderText} onChange={e => setRequest(e.target.value)} value={request} id="search" name="search" />
        <button className="SearchForm__button" type='submit' onClick={ handleSearchSubmit }>Искать</button>
      </form>
    </article>
  )
};

// **экспорт
export default SearchForm;
