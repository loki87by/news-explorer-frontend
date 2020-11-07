// **импорты
import React from 'react';
import NewsCardPanel from '../NewsCardPanel/NewsCardPanel';
import './NewsCard.css';
import './styles/__image/NewsCard__image.css';
import './styles/__text-content/NewsCard__text-content.css';
import './styles/__date/NewsCard__date.css';
import './styles/__title/NewsCard__title.css';
import './styles/__text/NewsCard__text.css';
import './styles/__source/NewsCard__source.css';

// **Функционал
function NewsCard(props) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  // *отслеживатель изменения ширины экрана
  React.useEffect(function() {
    function resizer() {
      setScreenWidth(window.innerWidth)
    };
    window.addEventListener("resize", resizer);
    resizer();
    return () => window.removeEventListener("resize", resizer);
  });

  return (
    <section className="NewsCard">
      <img className="NewsCard__image" src={require(`../../images/${props.article.image}`)} alt='caption'/>
      <NewsCardPanel loggedIn={props.loggedIn} savedNews={props.savedNews} updateSavedNews={props.updateSavedNews} article={props.article} articles={props.articles} isSavedNewsPage={props.isSavedNewsPage} />
      <p className="NewsCard__text-content NewsCard__date">{props.article.date}</p>
      <h1 className="NewsCard__text-content NewsCard__title">
        {screenWidth > 1231 ? props.article.name :
          screenWidth > 325 ?
            props.article.hit ? 'Национальное достояние – парки' : 'Лесные огоньки: история одной фотографии'
            : 'Национальное достояние – парки'}</h1>
      <h2 className="NewsCard__text-content NewsCard__text">
        {screenWidth > 1203 ? props.article.text :
          screenWidth < 556 ? 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...'
          : 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складыв...'}</h2>
      <h3 className="NewsCard__text-content NewsCard__source">{props.article.source}</h3>
    </section>
  )
};

// **экспорт
export default NewsCard;
