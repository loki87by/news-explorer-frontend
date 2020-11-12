// **импорты
import React from 'react';
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

  /*function updateLocalStorage(articles) {
    localStorage.removeItem('articles');
    //let updatedNews = JSON.stringify(articles);
    localStorage.setItem('articles', articles)
  }*/

  function saveArticle() {
    let token = localStorage.getItem('token')
    MainApi.updateArticle(token, props.keyword, props.article)
    .then((res) => {
      props.article._id = res._id
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }

  function deleteArticle() {
    let token = localStorage.getItem('token')
    MainApi.deleteArticle(token, props.article._id)
  }

  const [marker, setMarker] = React.useState(false);
  React.useEffect(() => {
    if (props.article.marked === true) {
      setMarker(true)}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // *отмечаем выбранные карточки
  function swichMarker() {
    if (marker) {
      props.article.marked = false;
      setMarker(false);
      deleteArticle()
      props.updateLocalStorage(props.savedNews)
    } else {
      props.article.marked = true;
      setMarker(true);
      saveArticle()
      props.updateLocalStorage(props.savedNews)
    }
  }

  // *снятие отметки
  function unsaveArticle() {
    props.article.marked = false;
    setMarker(false);
    deleteArticle();
    props.updateLocalStorage(props.savedNews);
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
      <button className="NewsCardPanel__button NewsCardPanel__button_save"></button>
      <h2 className="NewsCardPanel__tooltip">Войдите, чтобы сохранять статьи</h2>
    </div>)
};

// **экспорт
export default NewsCardPanel;
