// **импорты
import React from 'react';
import * as NewsApi from '../../utils/NewsApi';
import './SearchForm.css';
import './styles/__title/SearchForm__title.css';
import './styles/__text/SearchForm__text.css';
import './styles/__form/SearchForm__form.css';
import './styles/__input/SearchForm__input.css';
import './styles/__input/_placeholder-error/SearchForm__input_placeholder-error.css';
import './styles/__button/SearchForm__button.css';

// **Функционал
function SearchForm(props) {
  const[request, setRequest] = React.useState('');
  const[placeholderText, setPlaceholderText]  = React.useState('Введите тему новости');

  function handleSearchSubmit(e) {
    e.preventDefault();
    const regex = /\s+/;
    if ((request.length === 0) || (regex.test(request))) {
      setPlaceholderText('Нужно ввести ключевое слово')
    } else {
      searchNews()
      setPlaceholderText('Введите тему новости')
    }
  }
  function searchNews() {
    if (props.isDataLoaded) {
      props.setResponseSending(false);
      props.setDataLoaded(false);
    }
    props.setResponseSending(true);
    NewsApi.getNews(request)
      .then((res) => {
        return res.articles
      })
        .then((articles) => {
          let arr = [];
          arr = articles.map((item, index) => {
            let obj = {};
            obj.title = item.title;
            obj.keyword = request;
            let cleanText = item.description.replace(/<\/?[^>]+(>|$)/g, "");
            obj.text = cleanText;
            let date = new Date(item.publishedAt)
            let rusDate = date.toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
            let dateArr = rusDate.split(' ');
            let start = dateArr.slice(0, 2).join(' ')
            let end = dateArr.slice(2).join(' ')
            let comma = start.concat(', ').concat(end)
            obj.date = comma;
            obj.source = item.source.name;
            obj.link = item.url;
            obj.image = item.urlToImage;
            obj.id = index.toString().concat('+').concat(request);
            return obj;
          })
          if (arr.length !== 0) {
            props.setArticles(arr);
            props.setDataLoaded(true);
          } else {
            props.setSearchError('К сожалению по вашему запросу ничего не найдено')
          }
        })
      .catch((err) => {
        props.setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
    props.scroller();
  };

  // *DOM
  return (
    <article className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="SearchForm__form">
        <input required className={`SearchForm__input ${placeholderText === 'Нужно ввести ключевое слово' && "SearchForm__input_placeholder-error"}`} type='text' placeholder={placeholderText} onChange={e => setRequest(e.target.value)} value={request} id="search" name="search" />
        <button className="SearchForm__button" type='submit' onClick={ handleSearchSubmit }>Искать</button>
      </form>
    </article>
  )
};

// **экспорт
export default SearchForm;
