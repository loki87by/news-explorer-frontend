// ***импорты
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import TooltipPopup from '../TooltipPopup/TooltipPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { EMAIL_CHECKER,
  UNCORRECTED_EMAIL,
  PASS_CHECKER,
  SHORT_PASS,
  PASS_RULES,
  SHORT_NAME,
  CONFLICT_ERROR,
  LONG_NAME,
  UNAUTHORIZED_ERROR,
  UNKNOWN_ERROR } from '../../utils/consts.js';
import * as MainApi from '../../utils/MainApi';
import './App.css';
import './styles/App__background.css';
import './styles/App__background-image.css';

// ***Функционал
function App() {
  // **стейты
  // *глобальные стейты
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSavedNewsPage, setSavedNewsPage] = React.useState(false);
  // *стейты попапов
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isInformationPopupOpen, setInformationPopupOpen] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  // *стейты валидации
  const [isValidEmail, setValidEmail] = React.useState(false);
  const [invalidEmailMessage, setInvalidEmailMessage] = React.useState('');
  const [isValidPassword, setValidPassword] = React.useState(false);
  const [isValidName, setValidName] = React.useState(false);
  const [invalidPasswordMessage, setInvalidPasswordMessage] = React.useState('');
  const [invalidNameMessage, setInvalidNameMessage] = React.useState('');
  const [isRequestSending, setRequestSending] = React.useState(false);
  // *стейты карточек
  const [articles, setArticles] = React.useState([]);
  const [savedNews, updateSavedNews] = React.useState([]);
  // *стейты пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  // *стейты поиска
  const [isResponseSending, setResponseSending] = React.useState(false);
  const [isDataLoaded, setDataLoaded] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');
  const [keyword, setKeyword] = React.useState({});

  const history = useHistory();

  // **регистрация
  function handleRegisterClick() {
    setRequestSending(true)
    console.log(isRequestSending)
    MainApi.register(userEmail, userPassword, userName)
    .then((res) => {
      if(res) {
        handlePopupClose();
        setInformationPopupOpen(true);
      }
    })
    .catch((err) => {
      setInformationPopupOpen(false);
      if(err.message.includes(409)) {
        setRegistrationError(CONFLICT_ERROR);
        document.getElementById('regEmail').addEventListener('input', changeInputListener);
        document.getElementById('regPass').addEventListener('input', changeInputListener);
      } else {
        setRegistrationError(UNKNOWN_ERROR);
      }
    });
    setRequestSending(false)
  }

  // **авторизация
  // *попап логина
  function handleLoginClick() {
    setLoginPopupOpen(true);
  }

  // *обращение к API
  function onLogin() {
    setResponseSending(true)
    MainApi.login(userEmail, userPassword)
    .then((token) => {
      if (token){
        localStorage.setItem('token', token);
        handlePopupClose();
        sourceLoading();
      }
    }
    )
    .catch((err) => {
      if(err.message.includes(401)) {
        setLoginError(UNAUTHORIZED_ERROR);
        document.getElementById('loginEmail').addEventListener('input', changeInputListener);
        document.getElementById('loginPass').addEventListener('input', changeInputListener);
      } else {
        setLoginError(UNKNOWN_ERROR);
      }
    });
    setResponseSending(false)
  }

  // *получение данных пользователя
  function sourceLoading() {
    const token = localStorage.getItem('token');
    MainApi.getContent(token)
    .then((user) => {
      setCurrentUser(user);
      setLoggedIn(true);
      history.push('/');
    })
    .catch(() => logOut())
    .finally(() => {
      MainApi.getArticles(token)
      .then((articles) => {
        const news = JSON.stringify(articles);
        localStorage.setItem('articles', news);
        updateSavedNews(articles);
        const findedNews = localStorage.getItem('news');
        if (findedNews) {
          setResponseSending(true);
          setDataLoaded(true);
          setArticles(JSON.parse(findedNews));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    })
  }

  // *подгрузка данных залогиненного юзера
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      sourceLoading(token);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *обнуление ошибки
  function changeInputListener() {
    const oldEmail = userEmail;
    const oldPassword = userPassword;
    let newEmail;
    let newPassword;
    if (isLoginPopupOpen) {
      newEmail = document.getElementById('loginEmail').value;
    } else {
      newEmail = document.getElementById('regEmail').value;
    }
    if (isLoginPopupOpen) {
      newPassword = document.getElementById('loginPass').value;
    } else {
      newPassword = document.getElementById('regPass').value;
    }
    if ((oldEmail !== newEmail) || (oldPassword !== newPassword)) {
      setLoginError('');
      setRegistrationError('');
      document.getElementById('regEmail').removeEventListener('input', changeInputListener);
      document.getElementById('regPass').removeEventListener('input', changeInputListener);
      document.getElementById('loginEmail').removeEventListener('input', changeInputListener);
      document.getElementById('loginPass').removeEventListener('input', changeInputListener);
    }
  }

  // **закрытие модальных окон
  function handlePopupClose() {
    setLoginPopupOpen(false);
    setInformationPopupOpen(false);
    setRegisterPopupOpen(false);
    setUserEmail('');
    setUserPassword('');
    setUserName('');
    setInvalidEmailMessage('');
    setInvalidPasswordMessage('');
    setInvalidNameMessage('');
  }

  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      handlePopupClose();
    }
  }
  // *закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains('PopupWithForm_opened')) {
      handlePopupClose();
    }
  }

  // *слушатели закрытий
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('click', handleClickClose);
  })

  // *ввод и проверка валидности мыла
  function handleEmailChange(e) {
    setUserEmail(e.target.value);
    const email = e.target.value;
    const reg = EMAIL_CHECKER;
    const test = reg.test(email);
    if (test) {
      setValidEmail(true);
    } else if(email.length < 1) {
      setValidEmail(false);
      setInvalidEmailMessage('');
    } else {
      setInvalidEmailMessage(UNCORRECTED_EMAIL);
      setValidEmail(false);
    }
}

  // *ввод и проверка валидности пароля
  function handlePasswordChange(e) {
    setUserPassword(e.target.value);
    const pass = e.target.value;
    const reg = PASS_CHECKER;
    const test = reg.test(pass);
    if (pass.length === 0) {
      setInvalidPasswordMessage('');
      setValidPassword(false);
    } else if((pass.length < 8) && (pass.length > 0)) {
      setValidPassword(false);
      setInvalidPasswordMessage(SHORT_PASS);
    } else if(test) {
      setInvalidPasswordMessage('');
      setValidPassword(true);
    } else {
      setInvalidPasswordMessage(PASS_RULES);
      setValidPassword(false);
    }
  }

  // *ввод и проверка валидности имени
  function handleNameChange(e) {
    setUserName(e.target.value);
    const name = e.target.value;
    if (name.length < 2) {
      setInvalidNameMessage(SHORT_NAME);
      setValidName(false);
    } else if (name.length > 30) {
      setInvalidNameMessage(LONG_NAME);
      setValidName(false);
    } else {
      setValidName(true);
      setInvalidNameMessage('');
    }
  }

   // *смена формы
   function changeLink() {
    if (isRegisterPopupOpen) {
      setRegisterPopupOpen(false);
      setLoginPopupOpen(true);
    } else {
      setRegisterPopupOpen(true);
      setLoginPopupOpen(false);
    }
  };

  // **выход из аккаунта
  function logOut(){
    localStorage.removeItem('news');
    localStorage.removeItem('articles');
    localStorage.removeItem('token');
    setArticles([]);
    setResponseSending(false);
    setDataLoaded(false);
    setSavedNewsPage(false);
    setLoggedIn(false);
    history.push('/');
  }

  // **карточки
  // *отслеживание отмеченных карточек
  let getAllNews = JSON.parse(localStorage.getItem('news'));
  let getSavedNews = JSON.parse(localStorage.getItem('articles'));
  if ((getSavedNews !== null) && (getSavedNews !== undefined) && (getAllNews !== null) && (getAllNews !== undefined)) {
    getAllNews.forEach(function(v) {
    if (getSavedNews.some(function(v2) {
        return v.link === v2.link })){
      return v.marked = true}
    });
  }
  localStorage.removeItem('news');
  const markedNews = (JSON.stringify(getAllNews));
  localStorage.setItem('news', markedNews);

  // *подгрузка найденных карточек из локалки
  useEffect(() => {
    const news = localStorage.getItem('news');
    return () => {setArticles(JSON.parse(news))};
  }, [])

  // *подгрузка сохраненных карточек из локалки
  useEffect(() => {
    const articles = localStorage.getItem('articles');
    return () => {updateSavedNews(JSON.parse(articles))};
  }, []);

  useEffect(function() {
    function redirector() {
      const location = window.location;
      if ((location === '/saved-pages') && loggedIn === false) {
        return <Redirect to={{ path: "/", state: { setLoginPopupOpen: true } }}/>
      }
    };
    window.addEventListener("hashchange", redirector);
    redirector();
    return () => window.removeEventListener("hashchange", redirector);
  });

  // **DOM
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <div className='App__background App__background-image'>
              <Header
                loggedIn={loggedIn}
                handleLoginClick={handleLoginClick}
                isSavedNewsPage={isSavedNewsPage}
                setSavedNewsPage={setSavedNewsPage}
                logOut={logOut}/>
              <ScrollTo>
              {({ scroll }) => (
              <SearchForm scroller={() => scroll({ y: 550, smooth: true })}
                setSavedNewsPage={setSavedNewsPage}
                setResponseSending={setResponseSending}
                isDataLoaded={isDataLoaded}
                setDataLoaded={setDataLoaded}
                setKeyword={setKeyword}
                setArticles={setArticles}
                setSearchError={setSearchError} />
              )}
              </ScrollTo>
            </div>
              <Main
                loggedIn={loggedIn}
                isSavedNewsPage={isSavedNewsPage}
                isResponseSending={isResponseSending}
                isDataLoaded={isDataLoaded}
                articles={articles}
                setArticles={setArticles}
                searchError={searchError}
                savedNews={savedNews}
                keyword={keyword}
                updateSavedNews={updateSavedNews}
                setRegisterPopupOpen={setRegisterPopupOpen} />
          </Route>
          <Route>
            <div className='App__background'>
              <Header
                loggedIn={loggedIn}
                handleLoginClick={handleLoginClick}
                isSavedNewsPage={isSavedNewsPage}
                setSavedNewsPage={setSavedNewsPage}
                logOut={logOut} />
              </div>
              <ProtectedRoute
                exact path="/saved-pages"
                loggedIn={loggedIn}
                component={SavedNews}
                isSavedNewsPage={isSavedNewsPage}
                setSavedNewsPage={setSavedNewsPage}
                setArticles={setArticles}
                updateSavedNews={updateSavedNews}
                handleLoginClick={handleLoginClick} />
          </Route>
          <Route>
          {loggedIn ? <Redirect to="/saved-pages"/> : <Redirect to={{ path: "/", state: { setRegisterPopupOpen: true } }}/>}
          </Route>
        </Switch>
        <Login
          isOpen={isLoginPopupOpen}
          onLogin={onLogin}
          closeAllPopups={handlePopupClose}
          userEmail={userEmail}
          userPassword={userPassword}
          changeLink={changeLink}
          isValidEmail={isValidEmail}
          invalidEmailMessage={invalidEmailMessage}
          handleEmailChange={handleEmailChange}
          isValidPassword={isValidPassword}
          invalidPasswordMessage={invalidPasswordMessage}
          handlePasswordChange={handlePasswordChange}
          loginError={loginError}
          isRequestSending={isRequestSending}
          setRequestSending={setRequestSending}
        />
        <Registration
          isOpen={isRegisterPopupOpen}
          closeAllPopups={handlePopupClose}
          onRegister={handleRegisterClick}
          userEmail={userEmail}
          userPassword={userPassword}
          userName={userName}
          changeLink={changeLink}
          isValidEmail={isValidEmail}
          invalidEmailMessage={invalidEmailMessage}
          handleEmailChange={handleEmailChange}
          isValidPassword={isValidPassword}
          invalidPasswordMessage={invalidPasswordMessage}
          handlePasswordChange={handlePasswordChange}
          isValidName={isValidName}
          invalidNameMessage={invalidNameMessage}
          handleNameChange={handleNameChange}
          registrationError={registrationError}
          isRequestSending={isRequestSending}
          setRequestSending={setRequestSending}
        />
        <TooltipPopup isOpen={isInformationPopupOpen}
          handleLoginClick={handleLoginClick}
          onClose={handlePopupClose} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
};

// **экспорт
export default App;
