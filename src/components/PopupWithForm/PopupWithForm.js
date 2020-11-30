// **импорты
import React from 'react';
import './PopupWithForm.css';
import './styles/_opened/PopupWithForm_opened.css';
import './styles/__container/PopupWithForm__container.css';
import './styles/__close/PopupWithForm__close.css';
import './styles/__text/PopupWithForm__text.css';
import './styles/__label/PopupWithForm__label.css';
import './styles/__input/PopupWithForm__input.css';
import './styles/__error/PopupWithForm__error.css';
import './styles/__error/_registrationError/PopupWithForm__error_registrationError.css';
import './styles/__submit/PopupWithForm__submit.css';
import './styles/__subsidiary-text/PopupWithForm__subsidiary-text.css';
import './styles/__link/PopupWithForm__link.css';

// **функционал
function PopupWithForm(props) {
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={props.name}>
      <form className="PopupWithForm__container" name={props.name} onSubmit={props.onSubmit} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" type="reset" aria-label="Закрыть" onClick={props.onClose} id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{props.title}</h1>
        <label htmlFor="email" className="PopupWithForm__label">Email
          <input required type="text"
          className="PopupWithForm__input"
          onChange={e => props.handleEmailChange(e)}
          value={props.userEmail}
          placeholder="Введите почту"
          id={props.emailId}
          name="email"
          disabled={props.isRequestSending ? true : false } />
          <span className="PopupWithForm__error">{props.isValidEmail ? ' ' : props.invalidEmailMessage}</span>
        </label>
        <label htmlFor="pass" className="PopupWithForm__label">Пароль
          <input required type="password"
          className="PopupWithForm__input"
          onChange={e => props.handlePasswordChange(e)}
          value={props.userPassword}
          placeholder="Введите пароль"
          id={props.passiD} name="pass"
          disabled={props.isRequestSending ? true : false } />
          <span className="PopupWithForm__error">{props.isValidPassword ? ' ' : props.invalidPasswordMessage}</span>
        </label>
        {props.children}
        <button type="submit" className="PopupWithForm__submit" onClick={props.handleSubmit}
          disabled={(props.name === 'login' ?
            (props.isValidEmail && props.isValidPassword) :
            (props.isValidEmail && props.isValidPassword && props.isValidName))
              ? false : "disabled"}
          style={{ backgroundColor: `${(props.name === 'login'
            ? (props.isValidEmail && props.isValidPassword)
            : (props.isValidEmail && props.isValidPassword && props.isValidName))
              ? '' : "#E6E8EB"}`,
          color: `${(props.name === 'login'
            ? (props.isValidEmail && props.isValidPassword)
            : (props.isValidEmail && props.isValidPassword && props.isValidName))
              ? '' : "#B6BCBF"}` }}>
        {props.link}</button>
        <p className="PopupWithForm__subsidiary-text">или&nbsp;
          <button onClick={props.changeLink} type="button" className="PopupWithForm__subsidiary-text PopupWithForm__link">{props.antilink}</button>
        </p>
      </form>
    </section>
  );
}

// **экспорт
export default PopupWithForm;