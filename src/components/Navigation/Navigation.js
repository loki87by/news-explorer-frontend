// **импорты
import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';
import '../../blocks/Navigation/_black/Navigation_black.css'
import '../../blocks/Navigation/__link/Navigation__link.css'
import '../../blocks/Navigation/__button/Navigation__button.css'
// принимает пропсы loggedIn, setLoginPopupOpen, isSavedNewsPage и name

// **Функционал
function Navigation(props) {

  return (
    <section className={`Navigation ${props.isSavedNewsPage && "Navigation_black"}`}>
      <NavLink to="/" activeClassName="Navigation__link_active" className="Navigation__link">Главная</NavLink>
      {props.loggedIn ?
      <NavLink to="/saved-pages" activeClassName="Navigation__link_active" onClick={props.setSavedNewsPage(true)} className="Navigation__link">Сохраненные страницы</NavLink> : ''}
      {props.loggedIn ?
      <button className="Navigation__button" onClick={props.setSavedNewsPage(false)} type="reset">{props.currentUser.name} [-&gt;</button> :
      <button className="Navigation__button" type="button" onClick={props.handleLoginClick}>Авторизоваться</button>}
    </section>
  )
};

export default Navigation;
