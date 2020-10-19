// **импорты
import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';
import '../../blocks/Navigation/_black/Navigation_black.css'
import '../../blocks/Navigation/__link/Navigation__link.css'
import '../../blocks/Navigation/__button/Navigation__button.css'
// принимает пропсы loggedIn, isSavedNewsPage и name

// **Функционал
function Navigation(props) {
  return (
    <section className={`Navigation ${props.isSavedNewsPage && "Navigation_black"}`}>
      <Link to="/" className="Navigation__link">Главная</Link>
      {props.loggedIn ?
      <Link to="/saved-pages" className="Navigation__link">Сохраненные страницы</Link> : ''}
      {props.loggedIn ?
      <button className="Navigation__button" type="reset">{props.name} [-&gt;</button> :
      <Link to="/signin" className="Navigation__button">Авторизоваться</Link>}
    </section>
  )
};

export default Navigation;
