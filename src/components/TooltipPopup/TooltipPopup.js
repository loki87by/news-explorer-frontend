import React from 'react';
import closeButton from '../../images/close.png';
import './TooltipPopup.css';
import './styles/_opened/TooltipPopup_opened.css';
import './styles/__container/TooltipPopup__container.css';
import './styles/__close/TooltipPopup__close.css';
import './styles/__text/TooltipPopup__text.css';
import './styles/__link/TooltipPopup__link.css';

function TooltipPopup(props) {

  function redirectToLogin() {
    props.onClose();
    props.handleLoginClick()
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }
  function handleClickClose(e) {
    if (e.target.classList.contains('TooltipPopup_opened')) {
      props.onClose();
    }
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose)
    window.addEventListener('click', handleClickClose)
  })

  return (
    <section className={`TooltipPopup ${props.isOpen && "TooltipPopup_opened"}`} id='TooltipPopup'>
      <div className="TooltipPopup__container" name='TooltipPopup' id="TooltipPopup">
        <button className="TooltipPopup__close" src={ closeButton } type="button" aria-label="Закрыть" onClick={ props.onClose } id="closeAllPopups"></button>
        <h1 className="TooltipPopup__text">Пользователь успешно зарегистрирован!</h1>
        <button onClick={redirectToLogin} type="button" className="TooltipPopup__link">Войти</button>
      </div>
    </section>
  );
}

export default TooltipPopup;