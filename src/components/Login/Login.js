import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin();
    props.closeAllPopups();
  }

  return (
    <PopupWithForm isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="login"
      title={'Вход'}
      link={'Войти'}
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
      isValidName={props.isValidName}  />
  );
}

export default Login
