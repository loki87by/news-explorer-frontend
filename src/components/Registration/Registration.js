import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import '../PopupWithForm/styles/__label/PopupWithForm__label.css';
import '../PopupWithForm/styles/__input/PopupWithForm__input.css';
import '../PopupWithForm/styles/__error/PopupWithForm__error.css';
import '../PopupWithForm/styles/__error/_registrationError/PopupWithForm__error_registrationError.css';

function Registration(props) {

  function handleSubmit(e) {
    e.preventDefault();
    if (props.isValidEmail && props.isValidPassword && props.isValidName) {
      props.onRegister()
      return
    }
  };

  return (
    <PopupWithForm isOpen={props.isOpen}
      onClose={props.closeAllPopups}
      onSubmit={handleSubmit}
      name="registration"
      title={'Регистрация'}
      link={'Зарегистрироваться'}
      antilink={' Войти'}
      emailId={'regEmail'}
      passiD={'regPass'}
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
      invalidNameMessage={props.invalidNameMessage}
      handleNameChange={props.handleNameChange} children={
        <>
        <label htmlFor="name" className="PopupWithForm__label">Имя
            <input required type="name" className="PopupWithForm__input" onChange={e => props.handleNameChange(e)} value={props.userName}
            placeholder="Введите своё имя" id="name" name="name" />
            <span className="PopupWithForm__error">{props.isValidName ? ' ' : props.invalidNameMessage}</span>
          </label>
          <span className="PopupWithForm__error PopupWithForm__error_registrationError">{ props.registrationError }</span>
        </>}/>
  );
}

export default Registration
