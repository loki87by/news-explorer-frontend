// **импорты
import React from 'react';
import './Preloader.css';
import '../../blocks/Preloader/__figure/Preloader__figure.css';
import '../../blocks/Preloader/__figure-bigcircle/Preloader__figure-bigcircle.css';
import '../../blocks/Preloader/__figure-smallcircle/Preloader__figure-smallcircle.css';
import '../../blocks/Preloader/__figure-smallcircle/_left/Preloader__figure-smallcircle_left.css';
import '../../blocks/Preloader/__figure-smallcircle/_right/Preloader__figure-smallcircle_right.css';
import '../../blocks/Preloader/__figure-smallcircle/Preloader__figure-smallcircle.css';
import '../../blocks/Preloader/__figure-smile/Preloader__figure-smile.css';
import '../../blocks/Preloader/__figure-tail/Preloader__figure-tail.css';
import '../../blocks/Preloader/__rotator/Preloader__rotator.css';
import '../../blocks/Preloader/__text/Preloader__text.css';
import '../../blocks/Preloader/__errorTitle/Preloader__errorTitle.css';

// **Функционал
function Preloader(props) {
  return (
      props.searchError !== '' ?
      <div className="Preloader">
        <figure className="Preloader__figure">
          <div className="Preloader__figure-bigcircle"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_left"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_right"></div>
          <div className="Preloader__figure-smile"></div>
          <div className="Preloader__figure-tail"></div>
        </figure>
        <h1 className="Preloader__errorTitle">Ничего не найдено</h1>
        <p className="Preloader__text">{props.searchError}</p>
      </div> :
      <div className="Preloader">
        <figure className="Preloader__rotator"></figure>
        <p className="Preloader__text">Идет поиск новостей...</p>
      </div>
  )
};

export default Preloader;
