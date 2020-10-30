// **импорты
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import './styles/_black/Header_black.css'
import './styles/__title/Header__title.css'
// передать пропс открытой страницы сохраненок

// **Функционал
function Header(props) {
  return (
    <div className={`Header ${props.isSavedNewsPage && "Header_black"}`}>
      <h1 className="Header__title">NewsExplorer</h1>
      <Navigation handleLoginClick={props.handleLoginClick} setSavedNewsPage={props.setSavedNewsPage} isSavedNewsPage={props.isSavedNewsPage} loggedIn={props.loggedIn} currentUser={props.currentUser}/>
    </div>
  )
};

export default Header;
