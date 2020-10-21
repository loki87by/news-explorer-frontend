// **импорты
import React from 'react';
import './NewsCardPanel.css';
import '../../blocks/NewsCardPanel/__keyword/NewsCardPanel__keyword.css';
import '../../blocks/NewsCardPanel/__tooltip/NewsCardPanel__tooltip.css';
import '../../blocks/NewsCardPanel/__button/NewsCardPanel__button.css';
import '../../blocks/NewsCardPanel/__button/_delete/NewsCardPanel__button_delete.css';
import '../../blocks/NewsCardPanel/__button/_save/NewsCardPanel__button_save.css';
//передать пропсы isLoggedIn, isSavedNewsPage и article

// **Функционал
function NewsCardPanel(props) {
  return props.isLoggedIn ?
      (<>{props.isSavedNewsPage ?
        <div className="NewsCardPanel">
          <h2 className="NewsCardPanel__keyword">{props.article.keyword}</h2>
          <h2 className="NewsCardPanel__tooltip">Убрать из сохранённых</h2>
          <button className="NewsCardPanel__button NewsCardPanel__button_delete"></button>
        </div> :
      <div className="NewsCardPanel">
        <button className="NewsCardPanel__button"></button>
      </div>}
    </>) :
    (<div className="NewsCardPanel">
      <h2 className="NewsCardPanel__tooltip">Войдите, чтобы сохранять статьи</h2>
      <button className="NewsCardPanel__button NewsCardPanel__button_save"></button>
    </div>)
};

export default NewsCardPanel;