// **импорты
import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css';
import './styles/__link/Navigation__link.css';
import './styles/__link/_active/Navigation__link_active.css'
import './styles/__button/Navigation__button.css';
import './styles/_black/Navigation_black.css';

// **Функционал
function Navigation(props) {
  function offSavedPages() {
    props.setSavedNewsPage(false)
  }
  return (
    <section className="Navigation">
      {props.screenWidth > 610 ?
        <NavLink exact to="/" activeClassName="Navigation__link_active" onClick={offSavedPages} className={`Navigation__link ${props.isSavedNewsPage && "Navigation_black"}`}>Главная</NavLink>
        : <Link to="/" onClick={offSavedPages} className="Navigation__link">Главная</Link>}
      {props.loggedIn ?
      <>
        {props.screenWidth > 610 ?
          <NavLink to="/saved-pages" activeClassName="Navigation__link_active" className={`Navigation__link ${props.isSavedNewsPage && "Navigation_black"}`}>Сохраненные страницы</NavLink>
          : <Link to="/saved-pages" className="Navigation__link">Сохраненные страницы</Link>}
      </>
      : ''}
      {props.loggedIn ?
      <button className={`Navigation__button ${props.isSavedNewsPage && (props.screenWidth > 610) && "Navigation_black"}`} onClick={props.logOut} type="reset">{props.currentUser.name} [-&gt;</button> :
      <button className={`Navigation__button ${props.isSavedNewsPage && (props.screenWidth > 610) && "Navigation_black"}`} type="button" onClick={props.handleLoginClick}>Авторизоваться</button>}
    </section>
  )
};

export default Navigation;
