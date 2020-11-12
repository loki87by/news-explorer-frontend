// **импорты
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import TooltipPopup from '../TooltipPopup/TooltipPopup';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
//import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import './styles/App__background.css';
import './styles/App__background-image.css';

// **Функционал
function App() {
  // *стейты
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isInformationPopupOpen, setInformationPopupOpen] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ name: 'testUser'});
  const [isResponseSending, setResponseSending] = React.useState(false);
  const [isDataLoaded, setDataLoaded] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');
  const [isSavedNewsPage, setSavedNewsPage] = React.useState(false);
  const [savedNews, updateSavedNews] = React.useState([]);
  //const [userToken, setUserToken] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [registrationError, setRegistrationError] = React.useState('');
  //const [currentArticle, setCurrentArticle] = React.useState({});
  const [keyword, setKeyword] = React.useState({});

  const history = useHistory();

  // *регистрация
  function handleRegisterClick() {
    MainApi.register(userEmail, userPassword, userName)
    .then((res) => {
      if(res) {
        handlePopupClose()
        setInformationPopupOpen(true)
      }
    })
    .catch((err) => {
      setInformationPopupOpen(false)
      console.log(JSON.parse(err.message))
      setRegistrationError(JSON.parse(err.message))
    });
  }

  // *авторизация
  function handleLoginClick() {
    setLoginPopupOpen(true);
  }

  function onLogin() {
    MainApi.login(userEmail, userPassword)
    .then((token) => {
      if (token){
        localStorage.setItem('token', token);
        sourceLoading()
        //setUserToken(token);
      }
    }
    )
    .catch((err) => console.log(err));
  }
  // *получение данных пользователя
  function sourceLoading() {
    let token = localStorage.getItem('token')
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
        let news = JSON.stringify(articles);
        localStorage.setItem('articles', news)
        updateSavedNews(articles);
        console.log(savedNews)
        })
        .catch((err) => {
          console.log(err);
        });
      })
  }

  function updateLocalStorage(news) {
    localStorage.removeItem('articles');
    let articles = JSON.stringify(news);
    localStorage.setItem('articles', articles)
    updateSavedNews(articles);
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
    sourceLoading(token)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *закрытие модальных окон
  function handlePopupClose() {
    setLoginPopupOpen(false);
    setInformationPopupOpen(false);
    setRegisterPopupOpen(false);
  }

  // *выход из аккаунта
  function logOut(){
    localStorage.removeItem('token');
    setSavedNewsPage(false);
    setLoggedIn(false);
    history.push('/');
}

  // **DOM
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <PopupWithForm
          isOpen={isLoginPopupOpen || isRegisterPopupOpen}
          isRegisterPopupOpen={isRegisterPopupOpen}
          setRegisterPopupOpen={setRegisterPopupOpen}
          onClose={handlePopupClose}
          setUserEmail={setUserEmail}
          setUserPassword={setUserPassword}
          setUserName={setUserName}
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          onLogin={onLogin}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
          setInformationPopupOpen={setInformationPopupOpen}
          registrationError={registrationError} />
        <TooltipPopup isOpen={isInformationPopupOpen}
          onClose={handlePopupClose} />
        <Route exact path='/'>
          <div className='App__background App__background-image'>
            <Header
              loggedIn={loggedIn}
              handleLoginClick={handleLoginClick}
              isSavedNewsPage={isSavedNewsPage}
              setSavedNewsPage={setSavedNewsPage}
              currentUser={currentUser}
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
              currentUser={currentUser}
              isSavedNewsPage={isSavedNewsPage}
              isResponseSending={isResponseSending}
              isDataLoaded={isDataLoaded}
              articles={articles}
              searchError={searchError}
              savedNews={savedNews}
              keyword={keyword}
              updateLocalStorage={updateLocalStorage}
              /*updateSavedNews={updateSavedNews}*/ />
        </Route>
          <Switch>
            <Route path='/saved-pages'>
              <div className='App__background'>
                <Header
                  loggedIn={loggedIn}
                  handleLoginClick={handleLoginClick}
                  currentUser={currentUser}
                  isSavedNewsPage={isSavedNewsPage}
                  setSavedNewsPage={setSavedNewsPage}
                  logOut={logOut} />
                </div>
                <SavedNews
                  loggedIn={loggedIn}
                  currentUser={currentUser}
                  isSavedNewsPage={isSavedNewsPage}
                  setSavedNewsPage={setSavedNewsPage}
                  articles={articles}
                  updateLocalStorage={updateLocalStorage}
                  /*updateSavedNews={updateSavedNews}*/
                  savedNews={savedNews} />
            </Route>
          <Footer />
              <Route>
                {loggedIn ? <Redirect to="/saved-pages" /> : <Redirect to="/" />}
              </Route>
            </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

// **экспорт
export default App;
