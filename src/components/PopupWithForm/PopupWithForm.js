import React from 'react';
import './PopupWithForm.css'

function PopupWithForm(props) {
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id={props.name}>
      <form className="PopupWithForm__container" name={props.name} onSubmit={props.onSubmit} method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close" type="reset" aria-label="Закрыть" onClick={props.onClose} id="closeAllPopups"></button>
        <h2 className="PopupWithForm__title">{props.title}</h2>
        {props.children}
      </form>
    </section>
  );
}

export default PopupWithForm;