import React from 'react';
import closeButton from '../../images/close.png';
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

function PopupWithForm(props) {

  const [popupName, setPopupName] = React.useState('login');
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isValidEmail, setValidEmail] = React.useState(false);
  const [invalidEmailMessage, setInvalidEmailMessage] = React.useState('');
  const [isValidPassword, setValidPassword] = React.useState(false);
  const [invalidPasswordMessage, setInvalidPasswordMessage] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');

  function handleEmailChange(e) {
    setUserEmail(e.target.value);
    const email = e.target.value;
    const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const test = reg.test(email);
    if (test) {
      setValidEmail(true);
    } else if(email.length < 1) {
      setValidEmail(false);
      setInvalidEmailMessage('');
    } else {
      setInvalidEmailMessage('email введен некорректно');
      setValidEmail(false);
    }
}

function handlePasswordChange(e) {
  setUserPassword(e.target.value);
  const pass = e.target.value;
  const reg = /^[a-zA-Z0-9]{6,30}$/;
  const test = reg.test(pass);
  if (pass.length === 0) {
    setInvalidPasswordMessage('');
    setValidPassword(false);
  } else if((pass.length < 8) && (pass.length > 0)) {
    setValidPassword(false);
    setInvalidPasswordMessage('Пароль слишком короткий');
  } else if(test) {
    setInvalidPasswordMessage('');
    setValidPassword(true);
  } else {
    setInvalidPasswordMessage('Пароль может содержать только цифры и буквы');
    setValidPassword(false);
  }
}

  function loginSubmit() {
    closeAllPopups();
  }

  function registrationSubmit() {
    closeAllPopups();
    if (isValidEmail && isValidPassword) {
      props.registrationAcces()
    }
  };

  function changeLink() {
    if (isRegisterPopupOpen) {
      closeAllPopups()
      props.handleLoginClick()
    } else {
      setRegisterPopupOpen(true)
      setPopupName('registration');
    }
  };

  function closeAllPopups() {
    props.onClose();
    setRegisterPopupOpen(false);
    setPopupName('login');
  }
  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }
  function handleClickClose(e) {
    if (e.target.classList.contains('PopupWithForm_opened')) {
      closeAllPopups();
    }
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose)
    window.addEventListener('click', handleClickClose)
  })

  return (
    <section className={`PopupWithForm ${(props.isOpen || isRegisterPopupOpen) && "PopupWithForm_opened"}`} id={popupName}>
      <form className="PopupWithForm__container" name={popupName} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" src={ closeButton } type="button" aria-label="Закрыть" onClick={ closeAllPopups } id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{popupName === 'login' ? 'Вход' : 'Регистрация'}</h1>
        <label htmlFor="email" className="PopupWithForm__label">Email
          <input type="text" className="PopupWithForm__input" onChange={e => handleEmailChange(e)} value={userEmail} placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{isValidEmail ? ' ' : invalidEmailMessage}</span>
        </label>
        <label htmlFor="pass" className="PopupWithForm__label">Пароль
          <input type="password" className="PopupWithForm__input" onChange={e => handlePasswordChange(e)} value={userPassword} placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{isValidPassword ? ' ' : invalidPasswordMessage}</span>
        </label>
        {popupName === 'login' ? '' :
        <>
          <label htmlFor="name" className="PopupWithForm__label">Имя
            <input type="name" className="PopupWithForm__input" onChange={e => setUserName(e.target.value)} value={userName} placeholder="Введите своё имя" id="name" name="name" />
          </label>
          <span className="PopupWithForm__error PopupWithForm__error_registrationError">{ props.registrationError || ' ' }</span>
        </>
        }
        <button type="button" disabled={(isValidEmail && isValidPassword) ? false : "disabled"} style={{ backgroundColor: `${(isValidEmail && isValidPassword) ? '' : "black"}` }} onClick={popupName === 'login' ? loginSubmit : registrationSubmit} className="PopupWithForm__submit">{popupName === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или
          <button onClick={changeLink} type="button" className="PopupWithForm__subsidiary-text PopupWithForm__link">{popupName === 'login' ? ' Зарегистрироваться' : ' Войти'}</button>
        </p>
      </form>
    </section>
  );
}

export default PopupWithForm;