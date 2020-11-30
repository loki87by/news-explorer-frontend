// **импорты
import React from 'react';
import './TooltipPopup.css';
import './styles/_opened/TooltipPopup_opened.css';
import './styles/__container/TooltipPopup__container.css';
import './styles/__close/TooltipPopup__close.css';
import './styles/__text/TooltipPopup__text.css';
import './styles/__link/TooltipPopup__link.css';

// **функционал
function TooltipPopup(props) {

  // *переадресация к форме входа
  function redirectToLogin() {
    props.onClose();
    props.handleLoginClick();
  }

  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }

  // *закрытие оверлеем
  function handleClickClose(e) {
    if (e.target.classList.contains('TooltipPopup_opened')) {
      props.onClose();
    }
  }

  // *слушатель закрытий
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('click', handleClickClose);
  })

  // **DOM
  return (
    <section className={`TooltipPopup ${props.isOpen && "TooltipPopup_opened"}`} id='TooltipPopup'>
      <div className="TooltipPopup__container">
        <button className="TooltipPopup__close" type="button" aria-label="Закрыть" onClick={ props.onClose } id="closeTooltip"></button>
        <h1 className="TooltipPopup__text">Пользователь успешно зарегистрирован!</h1>
        <button onClick={redirectToLogin} type="button" className="TooltipPopup__link">Войти</button>
      </div>
    </section>
  );
}

// **экспорт
export default TooltipPopup;