import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../../utils/Auth';
import api from '../../utils/Api';
import closeButton from '../../images/close..png';
import './PopupWithForm.css';
import '../../blocks/PopupWithForm/_opened/PopupWithForm_opened.css';
import '../../blocks/PopupWithForm/__container/PopupWithForm__container.css';
import '../../blocks/PopupWithForm/__close/PopupWithForm__close.css';
import '../../blocks/PopupWithForm/__text/PopupWithForm__text.css';
import '../../blocks/PopupWithForm/__label/PopupWithForm__label.css';
import '../../blocks/PopupWithForm/__input/PopupWithForm__input.css';
import '../../blocks/PopupWithForm/__error/PopupWithForm__error.css';
import '../../blocks/PopupWithForm/__error/_registrationError/PopupWithForm__error_registrationError.css';
import '../../blocks/PopupWithForm/__submit/PopupWithForm__submit.css';
import '../../blocks/PopupWithForm/__subsidiary-text/PopupWithForm__subsidiary-text.css';
import '../../blocks/PopupWithForm/__link/PopupWithForm__link.css';
// передать пропсы: currentUser, signOut,
// setArticles, setLoginPopupOpen, setRegisterPopupOpen, setInformationPopup
// setUserToken, setLoggedIn, setCurrentUser
// сделать Auth, Api, informationPopup, authDataValidation

function PopupWithForm(props) {

  const history = useHistory();
  const [url, setUrl] = React.useState('');
  const [registrationError, setRegistrationError] = React.useState('');
  const [popupName, setPopupName] = React.useState('');
  const [validation, setValidation] = React.useState({
    isValidEmail: false,
    invalidEmailMessage: '',
    isValidPassword: false,
    invalidPasswordMessage: ''
  });
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  function emailValidation(user) {
    if (user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setValidation.isValidEmail(true)
    } else {
      setValidation.invalidEmailMessage('email введен некорректно')
    }
  }

  function passwordValidation(user) {
    if (user.password.length < 8) {
      setValidation.invalidPasswordMessage('Пароль слишком короткий')
    } else if (user.password.match('^[a-zA-Z0-9]{6,30}$')) {
      setValidation.invalidPasswordMessage('Пароль может содержать только цифры и буквы')
    } else {
      setValidation.isValidPassword(true)
    }
  }

  function loginSubmit(e) {
    e.preventDefault();
    const { email, password } = user;
    Auth.login({ email, password })
    .then((token) => {
      if (token){
        localStorage.setItem('token', token);
        props.setUserToken(token);
        sourceLoading(token);
      }
    }
    )
    .catch((err) => console.log(err));
  };

  function sourceLoading(token) {
    Auth.getContent(token)
    .then((user) => {
      props.setCurrentUser(user);
      props.setLoggedIn(true);
      history.push('/');
    })
    .catch(() => props.signOut())
    .finally(() => {
      api.getArticles(token)
      .then((articles) => {
        props.setArticles(articles);
        })
        .catch((err) => {
          console.log(err);
        });
      })
  }

  function registrationSubmit() {
    const { email, password } = user;
    Auth.register({ email, password })
    .then((res) => {
      if(res) {
        props.setInformationPopup(true);
      }
    })
    .catch((err) => setRegistrationError(err));
  };

  function changeLink() {
    if (url === '/signup') {
      setUrl('/signin');
      setPopupName('registration');
    } else {
      setUrl('/signup');
      setPopupName('login');
    }
  };

  function closePopups(props) {
    props.setLoginPopupOpen(false);
    props.setRegisterPopupOpen(false);
    props.setInformationPopup(false)
    setPopupName('');
  }

  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={popupName}>
      <form className="PopupWithForm__container" name={popupName} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" src={ closeButton } type="reset" aria-label="Закрыть" onClick={ closePopups } id="closePopups"></button>
        <h1 className="PopupWithForm__text">{popupName === 'login' ? 'Вход' : 'Регистрация'}</h1>
        <label htmlFor="email" className="PopupWithForm__label">Email
          <input type="text" className="PopupWithForm__input" onChange={e => setUser.email(e.target.value) && emailValidation()} value={props.currentUser.email} placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{validation.isValidEmail ? ' ' : validation.invalidEmailMessage}</span>
        </label>
        <label htmlFor="pass" className="PopupWithForm__label">Пароль
          <input type="password" className="PopupWithForm__input" onChange={e => setUser.password(e.target.value) && passwordValidation()} value={props.currentUser.password} placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{validation.isValidPassword ? ' ' : validation.invalidPasswordMessage}</span>
        </label>
        {popupName === 'login' ? '' :
        <>
          <label htmlFor="name" className="PopupWithForm__label">Имя
            <input type="name" className="PopupWithForm__input" onChange={e => setUser.name(e.target.value)} value={props.currentUser.name} placeholder="Введите своё имя" id="name" name="name" />
          </label>
          <span className="PopupWithForm__error PopupWithForm__error_registrationError">{ registrationError || ' ' }</span>
        </>
        }
        <button type="submit" onSubmit={popupName === 'login' ? loginSubmit : registrationSubmit} className="PopupWithForm__submit">{popupName === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или
          <Link to={url} onClick={changeLink} className="PopupWithForm__subsidiary-text PopupWithForm__link">{popupName === 'login' ? 'Зарегистрироваться' : 'Войти'}</Link>
        </p>
      </form>
    </section>
  );
}

export default PopupWithForm;