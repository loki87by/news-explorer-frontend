// **импорты
import React from 'react';
import articles from '../../utils/articles'
import './SearchForm.css';
import './styles/__title/SearchForm__title.css';
import './styles/__text/SearchForm__text.css';
import './styles/__form/SearchForm__form.css';
import './styles/__input/SearchForm__input.css';
import './styles/__button/SearchForm__button.css';

// **Функционал
function SearchForm(props) {
  const[request, setRequest] = React.useState('');
  function searchNews() {
    if (props.isDataLoaded) {
      props.setResponseSending(false);
      props.setDataLoaded(false);
      props.setArticles([]);
    }
    props.setResponseSending(true);
    props.scroller();
    const search = articles.filter((article, index) => {
      let arr = Object.values(article);
      let keyNews = arr.find(function(key) {
        if (key.toString().includes(request.toString())){
          article.id = index;
          article.keyword.splice(0, 1, request);
        };
        return key.toString().includes(request.toString());
      })
      return keyNews;
    })
    const news = search.filter((item) => {
      return Object.keys(item).length !== 0;
    });
    if (news.length !== 0) {
      props.setDataLoaded(true);
      props.setArticles(news);
      return
    } else {
      props.setSearchError('По вашему запросу ничего не найдено');
    }
  };

  // *DOM
  return (
    <article className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="SearchForm__form">
        <input required className="SearchForm__input" type='text' placeholder='Введите тему новости' onChange={e => setRequest(e.target.value)} value={request} id="search" name="search" />
        <button className="SearchForm__button" type='button' onClick={ searchNews }>Искать</button>
      </form>
    </article>
  )
};

// **экспорт
export default SearchForm;
