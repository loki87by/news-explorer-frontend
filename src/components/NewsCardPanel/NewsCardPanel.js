// **импорты
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import './NewsCardPanel.css';
import './styles/_savedPages/NewsCardPanel_savedPages.css';
import './styles/__keyword/NewsCardPanel__keyword.css';
import './styles/__tooltip/NewsCardPanel__tooltip.css';
import './styles/__button/NewsCardPanel__button.css';
import './styles/__button/_delete/NewsCardPanel__button_delete.css';
import './styles/__button/_save/NewsCardPanel__button_save.css';
import './styles/__button/_marked/NewsCardPanel__button_marked.css';

// **Функционал
function NewsCardPanel(props) {

  // *сохранение статьи
  function saveArticle() {
    const token = localStorage.getItem('token')
    MainApi.updateArticle(token, props.article.keyword, props.article)
    .then((last) => {
      setMarker(true);
      const news = (JSON.parse(localStorage.getItem('news')));
      const updateNews = news.map((item) => {
        if (item.link === props.article.link) {
          item._id = last._id
          item.marked = true;
        }
        return item;
      })
      localStorage.removeItem('news')
      const setNews = (JSON.stringify(updateNews))
      localStorage.setItem('news', setNews)
    })
    .then(() => {
      const articles = (JSON.parse(localStorage.getItem('news')));
      props.setArticles(articles)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }

  // *удаление статьи
  function deleteArticle() {
    const token = localStorage.getItem('token')
    setMarker(false);
    let id;
    if (!props.article._id) {
      const news = (JSON.parse(localStorage.getItem('news')))
      const currentArticle = news.filter((item) => {
        return item.link === props.article.link
      })
      id = currentArticle[0]._id
    } else {
      id = props.article._id
    }
    MainApi.deleteArticle(token, id)
    .then(() => {
      const news = (JSON.parse(localStorage.getItem('news')));
      const updateNews = news.map((item) => {
      if (item._link !== props.article.link) {
        item.marked = false;
      }
      return item;
    })
    const result = JSON.stringify(updateNews);
    localStorage.removeItem('news')
    localStorage.setItem('news', result)
    const savedNews = (JSON.parse(localStorage.getItem('articles')));
    props.updateSavedNews(savedNews)})
  }

  // *установка метки
  const [marker, setMarker] = React.useState(false);
  React.useEffect(() => {
    if (props.article.marked === true) {
      setMarker(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // *отмечаем выбранные карточки
  function swichMarker() {
    if (marker) {
      unsaveArticle()
    } else {
      saveArticle()
    }
  }

  // *снятие метки
  function unsaveArticle() {
    deleteArticle();
  }

  // *открытие попапа
  function handlePopupOpen() {
    props.setRegisterPopupOpen(true)
  }

  // **DOM
  return props.loggedIn ?
      (<>{props.isSavedNewsPage ?
        (<div className={`NewsCardPanel ${props.isSavedNewsPage && "NewsCardPanel_savedPages"}`}>
          <h2 className="NewsCardPanel__keyword">{props.article.keyword}</h2>
          <button type="button" onClick={unsaveArticle} className="NewsCardPanel__button NewsCardPanel__button_delete"></button>
          <h2 className="NewsCardPanel__tooltip">Убрать из сохранённых</h2>
        </div>) :
      (<div className="NewsCardPanel">
        <button type="button" onClick={swichMarker} className={`NewsCardPanel__button NewsCardPanel__button_save ${marker && "NewsCardPanel__button_marked"}`}></button>
      </div>)}
    </>) :
    (<div className="NewsCardPanel">
      <button className="NewsCardPanel__button NewsCardPanel__button_save" onClick={handlePopupOpen}></button>
      <h2 className="NewsCardPanel__tooltip" onClick={() => <Redirect to={{ path: "/", state: { setLoginPopupOpen: true } }}/>} >Войдите, чтобы сохранять статьи</h2>
    </div>)
};

// **экспорт
export default NewsCardPanel;
