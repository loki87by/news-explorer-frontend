import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import '../PopupWithForm/styles/__error/PopupWithForm__error.css';
import '../PopupWithForm/styles/__error/_loginError/PopupWithForm__error_loginError.css';

function Login(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.setRequestSending(true)
    props.onLogin();
  }

  return (
    <PopupWithForm isOpen={props.isOpen}
      onClose={props.closeAllPopups}
      onSubmit={handleSubmit}
      name="login"
      title={'Вход'}
      link={'Войти'}
      emailId={'loginEmail'}
      passiD={'loginPass'}
      antilink={' Зарегистрироваться'}
      userEmail={props.userEmail}
      userPassword={props.userPassword}
      changeLink={props.changeLink}
      isValidEmail={props.isValidEmail}
      invalidEmailMessage={props.invalidEmailMessage}
      handleEmailChange={props.handleEmailChange}
      isValidPassword={props.isValidPassword}
      invalidPasswordMessage={props.invalidPasswordMessage}
      handlePasswordChange={props.handlePasswordChange}
      isValidName={props.isValidName}
      isRequestSending={props.isRequestSending} children={
        <span className="PopupWithForm__error PopupWithForm__error_loginError">{ props.loginError }</span>
      } />
  );
}

export default Login
