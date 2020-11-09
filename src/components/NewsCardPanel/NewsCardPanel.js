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
  // *отмечаем выбранные карточки
  const [marker, setMarker] = React.useState(false);
  React.useEffect(() => {
    if (props.article.marked === true) {
      setMarker(true)}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function swichMarker() {
    // eslint-disable-next-line no-useless-escape
    //const regex = '/\D/gi';
    //let index = props.article.id.replace(regex, '').toNumber;
    let index = props.article.id
    if (marker) {
      props.article.marked = false;
      setMarker(false);
    } else {
      props.article.marked = true;
      setMarker(true);
    }
    function markered() {
      props.articles.splice(index, 1, props.article);
    }
    markered();
    let markedNews = props.articles.filter((item, index) => {
      if (item.marked === true) {
      return item
      }
      return item[index]
    });
    props.updateSavedNews(markedNews);
  }

  // *снятие отметки
  function unsaveArticle() {
    let index = props.article.id;
    props.article.marked = false;
    props.articles.splice(index, 0);
    setMarker(false);
    let markedNews = props.articles.filter((item, index) => {
      if (item.marked === true) {
      return item
      }
      return item[index]
    });
    props.updateSavedNews(markedNews);
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
