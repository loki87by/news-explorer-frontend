// **импорты
import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';
import './styles/__link/Navigation__link.css';
import './styles/__link/_active/Navigation__link_active.css'
import './styles/__button/Navigation__button.css';
import './styles/_black/Navigation_black.css';
// принимает пропсы loggedIn, setLoginPopupOpen, isSavedNewsPage и name

// **Функционал
function Navigation(props) {
  function offSavedPages() {
    props.setSavedNewsPage(false)
  }
  return (
    <section className="Navigation">
      <NavLink exact to="/" activeClassName="Navigation__link_active" onClick={offSavedPages} className={`Navigation__link ${props.isSavedNewsPage && "Navigation_black"}`}>Главная</NavLink>
      {props.loggedIn ?
      <NavLink to="/saved-pages" activeClassName="Navigation__link_active" className={`Navigation__link ${props.isSavedNewsPage && "Navigation_black"}`}>Сохраненные страницы</NavLink> : ''}
      {props.loggedIn ?
      <button className={`Navigation__button ${props.isSavedNewsPage && "Navigation_black"}`} onClick={props.logOut} type="reset">{props.currentUser.name} [-&gt;</button> :
      <button className={`Navigation__button ${props.isSavedNewsPage && "Navigation_black"}`} type="button" onClick={props.handleLoginClick}>Авторизоваться</button>}
    </section>
  )
};

export default Navigation;
