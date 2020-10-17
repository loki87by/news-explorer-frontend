// **импорты
import React from 'react';
import Navigation from '../Navigation';
import './Header.css';

// **Функционал
function Header() {
  return (
    <div className="Header">
      <h1 className="Header__title">NewsExplorer</h1>
      <Navigation />
    </div>
  )
};

export default Header;
