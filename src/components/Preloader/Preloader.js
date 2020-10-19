// **импорты
import React from 'react';
import './Preloader.css';
import '../../blocks/Preloader/__rotator/Preloader__rotator.css'
import '../../blocks/Preloader/__text/Preloader__text.css'

// **Функционал
function Preloader() {
  return (
    <div className="Preloader">
      <link rel="stylesheet" href="../../blocks/Preloader/__rotator/Preloader__rotator.css" />
      <p className="Preloader__text">Идет поиск новостей...</p>
    </div>
  )
};

export default Preloader;
