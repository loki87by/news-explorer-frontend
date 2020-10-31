// **импорты
import React from 'react';
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
const [marker, setMarker] = React.useState(false)
  function swichMarker() {
    let index = props.article.id;
    if (props.article.marked) {
      props.article.marked = false;
      setMarker(false)
    } else {
      props.article.marked = true;
      setMarker(true);
    }
    function marker() {
      props.articles.splice(index, 1, props.article)
    }
    marker()
    let savedNews = props.articles.filter((item) => {return item.marked === true})
    props.updateSavedNews(savedNews)
  }
  function unsaveArticle() {
    let index = props.article.id;
    props.article.marked = false;
    props.articles.splice(index, 0)
    setMarker(false);
    let savedNews = props.articles.filter((item) => {return item.marked === true})
    props.updateSavedNews(savedNews)
  }

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

export default NewsCardPanel;
