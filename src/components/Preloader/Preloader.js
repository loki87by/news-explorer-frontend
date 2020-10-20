// **импорты
import React from 'react';
import './Preloader.css';
import '../../blocks/Preloader/__rotator/Preloader__rotator.css'
import '../../blocks/Preloader/__text/Preloader__text.css'
import '../../blocks/Preloader/__errorTitle/Preloader__errorTitle.css'
// принимает пропс searchError, который содержит текст ошибки переданной сервером

// **Функционал
function Preloader(props) {
  return (
      props.searchError !== '' ?
      <div className="Preloader">
        <figure className="Preloader__figure">
          <div className="Preloader__figure-bigcircle"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_left"></div>
          <div className="Preloader__figure-smallcircle Preloader__figure-smallcircle_left"></div>
          <div className="Preloader__figure-smile"></div>
          <div className="Preloader__figure-tail"></div>
        </figure>
        <h1 className="Preloader__errorTitle">Ничего не найдено</h1>
        <p className="Preloader__text">{props.searchError}</p>
      </div> :
      <div className="Preloader">
        <link rel="stylesheet" href="../../blocks/Preloader/__rotator/Preloader__rotator.css" />
        <p className="Preloader__text">Идет поиск новостей...</p>
      </div>
  )
};

export default Preloader;
