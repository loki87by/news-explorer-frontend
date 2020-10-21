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
import '../../blocks/PopupWithForm/__error/_conflict/PopupWithForm__error_conflict.css';
import '../../blocks/PopupWithForm/__submit/PopupWithForm__submit.css';
import '../../blocks/PopupWithForm/__subsidiary-text/PopupWithForm__subsidiary-text.css';
import '../../blocks/PopupWithForm/__link/PopupWithForm__link.css';
// передать пропсы: isOpen, popupName, isLoginPage, onClose, currentUser, signOut,
// setArticles
// isValidEmail, isValidPassword, setName, setUserToken, setLoggedIn, setCurrentUser
// сделать Auth, Api

function PopupWithForm(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState('');

  const history = useHistory();

  function loginSubmit(e) {
    e.preventDefault();
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
    Auth.register(email, password, name)
    .then((res) => {
      if(res) {
        history.push('/signin');
      /* setPassedMessage() //заменить на тултип успешной регистрации */
      } else {
      // передать ошибку
      }
    })
    .catch((err) => console.log(err));
  };

  function changeLink() {
    if (url === '/signup') {
      setUrl('/signin');
    } else {
      setUrl('/signup');
    }
  };
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={props.popupName}>
      <form className="PopupWithForm__container" name={props.popupName} onSubmit={props.isLoginPage ? loginSubmit : registrationSubmit} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" src={ closeButton } type="reset" aria-label="Закрыть" onClick={props.onClose} id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{props.isLoginPage ? 'Вход' : 'Регистрация'}</h1>
        <label for="email" className="PopupWithForm__label">Email
          <input type="text" className="PopupWithForm__input" onChange={e => setEmail(e.target.value)} value={props.currentUser.email} placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{props.isValidEmail ? ' ' : 'текст ошибки'}</span>
        </label>
        <label for="pass" className="PopupWithForm__label">Пароль
          <input type="password" className="PopupWithForm__input" onChange={e => setPassword(e.target.value)} value={props.currentUser.password} placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{props.isValidPassword ? ' ' : 'текст ошибки'}</span>
        </label>
        {props.isLoginPage ? '' :
        <>
          <label for="name" className="PopupWithForm__label">Имя
            <input type="name" className="PopupWithForm__input" onChange={e => setName(e.target.value)} value={props.currentUser.name} placeholder="Введите своё имя" id="name" name="name" />
          </label>
          <span className="PopupWithForm__error PopupWithForm__error_conflict">{'текст ошибки' || ' '}</span>
        </>
        }
        <button type="submit" className="PopupWithForm__submit">{props.isLoginPage ? 'Войти' : 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или
          <Link to={url} onClick={changeLink} className="PopupWithForm__link">{props.isLoginPage ? 'Зарегистрироваться' : 'Войти'}</Link>
        </p>
      </form>
    </section>
  );
}

export default PopupWithForm;