import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css'

function PopupWithForm(props) {
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={props.name}>
      <form className="PopupWithForm__container" name={props.name} onSubmit={props.onSubmit} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" type="reset" aria-label="Закрыть" onClick={props.onClose} id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{'Вход' || 'Регистрация'}</h1>
        <label for="email" className="PopupWithForm__label">Email
          <input type="text" className="PopupWithForm__input" onChange={e => props.setEmail(e.target.value)} value={props.email} placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{'текст ошибки' || ' '}</span>
        </label>
        <label for="pass" className="PopupWithForm__label">Пароль
          <input type="password" className="PopupWithForm__input" onChange={e => props.setPassword(e.target.value)} value={props.password} placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{'текст ошибки' || ' '}</span>
        </label>
        <label for="name" className="PopupWithForm__label">Имя
          <input type="name" className="PopupWithForm__input" onChange={e => props.setName(e.target.value)} value={props.name} placeholder="Введите своё имя" id="name" name="name" />
        </label>
        <span className="PopupWithForm__error PopupWithForm__error_conflict">{'текст ошибки' || ' '}</span>
        <button type="submit" className="PopupWithForm__submit">{'Войти' || 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или
          <Link to="/signup" onClick={props.changeLink} className="PopupWithForm__link">{'Войти' || 'Зарегистрироваться'}</Link>
        </p>
      </form>
    </section>
  );
}

export default PopupWithForm;