// **импорты
import React, { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import './styles/__mobile-menu/Header__mobile-menu.css';
import './styles/_mobilePosition/Header_mobilePosition.css';
import './styles/__mobile-menu/_black/Header__mobile-menu_black.css';
import './styles/_mobileMenuOpen/Header_mobileMenuOpen.css';
import './styles/__mobile-menu/_close/Header__mobile-menu_close.css';
import './styles/_black/Header_black.css';
import './styles/__title/Header__title.css';

// **Функционал
function Header(props) {
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // *отслеживатель изменения ширины экрана
  useEffect(function() {
    function resizer() {
      setScreenWidth(window.innerWidth)
      if (screenWidth > 610) {
        setMobileMenuOpen(false)
      }
    };
    window.addEventListener("resize", resizer);
    resizer();
    return () => window.removeEventListener("resize", resizer);
  });

  // *переключатель меню мобильной версии
  function mobileMenuSwitcher() {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false)
    } else {
      setMobileMenuOpen(true)
    }
  }

  // **DOM
  return (
    <header className={`Header ${props.isSavedNewsPage && !isMobileMenuOpen && "Header_black"} ${props.isSavedNewsPage && (screenWidth < 611) && "Header_mobilePosition"} ${isMobileMenuOpen && "Header_mobileMenuOpen"}`}>
      <h1 className="Header__title">NewsExplorer</h1>
      {screenWidth > 610 ?
      <Navigation screenWidth={screenWidth} logOut={props.logOut} handleLoginClick={props.handleLoginClick} setSavedNewsPage={props.setSavedNewsPage} isSavedNewsPage={props.isSavedNewsPage} loggedIn={props.loggedIn} currentUser={props.currentUser}/>
      : (isMobileMenuOpen ?
        <>
          <button onClick={mobileMenuSwitcher} area-label="Закрыть" className="Header__mobile-menu Header__mobile-menu_close"></button>
          <Navigation screenWidth={screenWidth} logOut={props.logOut} handleLoginClick={props.handleLoginClick} setSavedNewsPage={props.setSavedNewsPage} isSavedNewsPage={props.isSavedNewsPage} loggedIn={props.loggedIn} currentUser={props.currentUser}/>
        </>
        : <button className={`Header__mobile-menu ${props.isSavedNewsPage && "Header__mobile-menu_black"}`} area-label="Открыть" onClick={mobileMenuSwitcher}></button>)}
    </header>
  )
};

// **экспорт
export default Header;
