// **импорты
import React from 'react';
import './Preloader.css';
import './styles/__figure/Preloader__figure.css';
import './styles/__figure-bigcircle/Preloader__figure-bigcircle.css';
import './styles/__figure-smallcircle/Preloader__figure-smallcircle.css';
import './styles/__figure-smallcircle/_left/Preloader__figure-smallcircle_left.css';
import './styles/__figure-smallcircle/_right/Preloader__figure-smallcircle_right.css';
import './styles/__figure-smallcircle/Preloader__figure-smallcircle.css';
import './styles/__figure-smile/Preloader__figure-smile.css';
import './styles/__figure-tail/Preloader__figure-tail.css';
import './styles/__rotator/Preloader__rotator.css';
import './styles/__text/Preloader__text.css';
import './styles/__errorTitle/Preloader__errorTitle.css';

// **Функционал
function Preloader(props) {
  return (
      props.searchError !== '' ?
      <section className="Preloader">
        <figure className="Preloader__figure">
          <div className="Preloader__figure-bigcircle"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_left"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_right"></div>
          <div className="Preloader__figure-smile"></div>
          <div className="Preloader__figure-tail"></div>
        </figure>
        <h1 className="Preloader__errorTitle">Ничего не найдено</h1>
        <p className="Preloader__text">{props.searchError}</p>
      </section> :
      <section className="Preloader">
        <figure className="Preloader__rotator"></figure>
        <p className="Preloader__text">Идет поиск новостей...</p>
      </section>
  )
};

// **экспорт
export default Preloader;
