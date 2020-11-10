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

  // *стейты
  const [popupName, setPopupName] = React.useState('login');
  const [isValidEmail, setValidEmail] = React.useState(false);
  const [invalidEmailMessage, setInvalidEmailMessage] = React.useState('');
  const [isValidPassword, setValidPassword] = React.useState(false);
  const [isValidName, setValidName] = React.useState(false);
  const [invalidPasswordMessage, setInvalidPasswordMessage] = React.useState('');
  const [invalidNameMessage, setInvalidNameMessage] = React.useState('');

  // *ввод и проверка валидности мыла
  function handleEmailChange(e) {
    props.setUserEmail(e.target.value);
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

  // *ввод и проверка валидности пароля
  function handlePasswordChange(e) {
    props.setUserPassword(e.target.value);
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

  function handleNameChange(e) {
    props.setUserName(e.target.value);
    const name = e.target.value;
    if (name.length < 2) {
      setInvalidNameMessage('Имя должно быть не менее двух символов');
      setValidName(false);
    } else if (name.length > 30) {
      setInvalidNameMessage('Имя должно быть не более 30 символов');
      setValidName(false);
    } else {
      setValidName(true);
      setInvalidNameMessage('')
    }
  }

  // *сабмит формы
  function loginSubmit(e) {
    e.preventDefault();
    props.onLogin();
    closeAllPopups();
  }

  // *сабмит формы при регистрации
  function registrationSubmit(e) {
    e.preventDefault();
    if (isValidEmail && isValidPassword && isValidName) {
      props.handleRegisterClick()
      return
    }
  };

  // *смена формы
  function changeLink() {
    if (props.isRegisterPopupOpen) {
      closeAllPopups();
      props.handleLoginClick();
    } else {
      props.setRegisterPopupOpen(true);
      setPopupName('registration');
    }
  };

  // *закрытие модальных окон
  function closeAllPopups() {
    props.onClose();
    setPopupName('login');
    props.setUserEmail('');
    props.setUserPassword('');
    props.setUserName('');
    setInvalidEmailMessage('');
    setInvalidPasswordMessage('');
    setInvalidNameMessage('');
  }
  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }
  // *закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains('PopupWithForm_opened')) {
      closeAllPopups();
    }
  }
  // *слушатели закрытий
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('click', handleClickClose);
  })

  // **DOM
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={popupName}>
      <form className="PopupWithForm__container" name={popupName} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" type="button" aria-label="Закрыть" onClick={ closeAllPopups } id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{popupName === 'login' ? 'Вход' : 'Регистрация'}</h1>
        <label htmlFor="email" className="PopupWithForm__label">Email
          <input required type="text" className="PopupWithForm__input" onChange={e => handleEmailChange(e)} value={props.userEmail}
          placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{isValidEmail ? ' ' : invalidEmailMessage}</span>
        </label>
        <label htmlFor="pass" className="PopupWithForm__label">Пароль
          <input required type="password" className="PopupWithForm__input" onChange={e => handlePasswordChange(e)} value={props.userPassword}
          placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{isValidPassword ? ' ' : invalidPasswordMessage}</span>
        </label>
        {popupName === 'login' ? '' :
        <>
          <label htmlFor="name" className="PopupWithForm__label">Имя
            <input required type="name" className="PopupWithForm__input" onChange={e => handleNameChange(e)} value={props.userName}
            placeholder="Введите своё имя" id="name" name="name" />
            <span className="PopupWithForm__error">{isValidName ? ' ' : invalidNameMessage}</span>
          </label>
          <span className="PopupWithForm__error PopupWithForm__error_registrationError">{ props.registrationError || ' ' }</span>
        </>
        }
        <button type="submit" className="PopupWithForm__submit" onClick={popupName === 'login' ? loginSubmit : registrationSubmit}
          disabled={(popupName === 'login' ?
            (isValidEmail && isValidPassword) :
            (isValidEmail && isValidPassword && isValidName))
              ? false : "disabled"}
          style={{ backgroundColor: `${(popupName === 'login'
            ? (isValidEmail && isValidPassword)
            : (isValidEmail && isValidPassword && isValidName))
              ? '' : "#E6E8EB"}`,
          color: `${(popupName === 'login'
            ? (isValidEmail && isValidPassword)
            : (isValidEmail && isValidPassword && isValidName))
              ? '' : "#B6BCBF"}` }}>
        {popupName === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или&nbsp;
          <button onClick={changeLink} type="button" className="PopupWithForm__subsidiary-text PopupWithForm__link">{popupName === 'login' ? ' Зарегистрироваться' : ' Войти'}</button>
        </p>
      </form>
    </section>
  );
}

// **экспорт
export default PopupWithForm;