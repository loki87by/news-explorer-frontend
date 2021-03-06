// ***импорты
import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';
import './styles/__title/SavedNewsHeader__title.css';
import './styles/__caption/SavedNewsHeader__caption.css';
import './styles/__hashtag-information/SavedNewsHeader__hashtag-information.css';

// ***Функционал
function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  // **берем массив из локалки
  const savedNews = JSON.parse(localStorage.getItem('articles'));

  // **получаем массив хэштэгов
  const hashtags = savedNews.map((item) => {
    return item.keyword;
  })

  // **счетчик количества сохраненных новостей
  const newsQuantity = savedNews.length;

  // **функция сортировки и отброса повторяющихся хэштэгов
  // *сосчитаем повторяющиеся хэштэги
  const repeatCounter = hashtags.reduce((p, i) => {
    if (!p[i]) { p[i] = 1; } else { p[i] += 1; }
    return p; }, {});
  // *отсортируем массив по количеству повторов
  const arrayNormalizer = Object.keys(repeatCounter).sort((a,b) => {
    return repeatCounter[b] - repeatCounter[a]});

  // **функция выбора вступительного текста по количеству хэштэгов
  function textCreator() {
    if (arrayNormalizer.length === 1) {
      return 'По ключевому слову: ';
    } else {
      return 'По ключевым словам: ';
    }
  }
  textCreator();

  // **функция возврата ТОП-2 хэштэгов
  function hashtagsCreator() {
    if (arrayNormalizer.length === 1) {
      return `${arrayNormalizer[0]}`;
    } else if (arrayNormalizer.length === 2) {
      return `${arrayNormalizer[0]} и ${arrayNormalizer[1]}`;
    } else {
      return `${arrayNormalizer[0]}, ${arrayNormalizer[1]} `;
    }
  }

  // **функция возврата хэштегов вне ТОП-2
  function hashtagsExcesser() {
    const excess = arrayNormalizer.length - 2;
    if (arrayNormalizer.length === 3) {
      return `${arrayNormalizer[2]}`;
    } else if ((arrayNormalizer.length > 3) && (arrayNormalizer.length < 7)){
      return `${excess}-м другим`;
    } else {
      return `${excess}-и другим`;
    }
  }

  // **функция подбора окончаний в зависимости от числительного
  let newsQuantityText;
  function newsQuantityTextCreator() {
    if (newsQuantity === 1) {
      newsQuantityText = 'сохранённая статья';
    } else if ((newsQuantity > 1) && (newsQuantity < 5)) {
      newsQuantityText = 'сохранённых статьи';
    } else {
      newsQuantityText = 'сохранённых статей';
    }
  };
  newsQuantityTextCreator()

  // ***DOM
  return (
    <article className="SavedNewsHeader">
      <p className="SavedNewsHeader__caption">Сохранённые статьи</p>
      <h1 className="SavedNewsHeader__title">{`${currentUser.name}, у вас ${newsQuantity} ${newsQuantityText}`}</h1>
      {hashtags.length > 0 ?
        (arrayNormalizer.length < 3 ? <h2 className="SavedNewsHeader__hashtag-information">{textCreator()}<b>{hashtagsCreator()}</b></h2>
        : <h2 className="SavedNewsHeader__hashtag-information">{textCreator()}<b>{hashtagsCreator()}</b>и <b>{hashtagsExcesser()}</b></h2>)
      : ''}
    </article>
  )
};

// ***экспорт
export default SavedNewsHeader;
