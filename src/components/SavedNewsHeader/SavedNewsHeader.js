// **импорты
import React from 'react';
import './SavedNewsHeader.css';
// принимает пропсы: newsQuantity(количество сохраненных новостей),
// hashtags(массив хэштэгов сохраненных новостей) и name (пользователя)

// **Функционал
function SavedNewsHeader(props) {
  // *функция сортировки и отброса повторяющихся хэштэгов
  const arrayNormalizer = (props) => {
    // сосчитаем повторяющиеся хэштэги
    const repeatCounter = props.hashtags.reduce((p, i) => {
      if (!p[i]) { p[i] = 1; } else { p[i] += 1; }
      return p; }, {});
    // отсортируем массив по количеству повторов
    const keysSorted = Object.keys(repeatCounter).sort((a,b) => {
      return repeatCounter[b] - repeatCounter[a]});
    return keysSorted
  }
  // *функция выбора вступительного текста по количеству хэштэгов
  function textCreator() {
    if (arrayNormalizer.length === 1) {
      return 'По ключевому слову: '
    } else {
      return 'По ключевым словам: '
    }
  }
  // *функция возврата ТОП-2 хэштэгов
  function hashtagsCreator() {
    if (arrayNormalizer.length === 1) {
      return `${arrayNormalizer[0]}`
    } else if (arrayNormalizer.length === 2) {
      return `${arrayNormalizer[0]} и ${arrayNormalizer[1]}`
    } else {
      return `${arrayNormalizer[0]}, ${arrayNormalizer[1]} `
    }
  }
  // *функция возврата хэштегов превышающих ТОП-2
  function hashtagsExcesser() {
    const excess = arrayNormalizer.length - 2;
    if (arrayNormalizer.length === 3) {
      return `${arrayNormalizer[2]}`
    } else if ((arrayNormalizer.length > 3) && (arrayNormalizer.length < 7)){
      return `${excess}-м другим`
    } else {
      return `${excess}-и другим`
    }
  }
  // *результатирующая функция возращающая весь текстовый блок
  function textResulter() {
    if (props.hashtags.length < 3) {
      return (
        <h2 className="SavedNewsHeader__hashtag-information">{textCreator}<b>{hashtagsCreator}</b></h2>
      )
    } else {
      return (
        <h2 className="SavedNewsHeader__hashtag-information">{textCreator}<b>{hashtagsCreator}</b>и <b>{hashtagsExcesser}</b></h2>
      )
    }
  }
  return (
    <section className="SavedNewsHeader">
      <p className="SavedNewsHeader__caption">Сохранённые статьи</p>
      <h1 className="SavedNewsHeader__title">{`${props.name} у вас ${props.newsQuantity} сохранённых статей`}</h1>
      {props.hashtags.length > 0 ? {textResulter} : ''}
    </section>
  )
};

// *экспорт
export default SavedNewsHeader;
