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

import {ArticlesContext} from '../../contexts/ArticlesContext';

import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import './App.css';
import './styles/App__background.css';
import './styles/App__background-image.css';

// **Функционал
function App() {
  // *стейты
  const [loggedIn, setLoggedIn] = React.useState(false);
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

  const history = useHistory();

  // *регистрация
  function handleRegisterClick() {
    MainApi.register(userEmail, userPassword, userName)
    .then((res) => {
      if(res) {
        setInformationPopupOpen(true)
      } else {
        setInformationPopupOpen(false)
        // добавить текст ошибки
      }
    })
    .catch((err) => console.log(err));
  }

  // *авторизация
  function handleLoginClick() {
    setLoginPopupOpen(true);
    MainApi.login({ userEmail, userPassword })
    .then((token) => {
      if (token){
        localStorage.setItem('token', token);
        //setUserToken(token);
        sourceLoading(token);
      }
    }
    )
    .catch((err) => console.log(err));
  }
  // *получение данных пользователя
  function sourceLoading(token) {
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
        updateSavedNews(articles);
        })
        .catch((err) => {
          console.log(err);
        });
      })
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
  }

  // *выход из аккаунта
  function logOut(){
    localStorage.removeItem('token');
    setSavedNewsPage(false);
    setLoggedIn(false);
    history.push('/');
  }
  /*function updateArticle(data) {
    const token = userToken
    console.log(token)
    MainApi.updateArticle(token, keyword, article)
    // console.log(data.name, data.link)
    .then((res) => {
      setDataImage(res);
      setCards([res, ...cards]);
      closeAllPopups()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
}*/

/*function articleDelete(card) {
  setConfirmPopupOpen(true)
  selectCardDelete(card)
  function ConfirmDelete() {
    const token = userToken
    api.deleteCard(token, cardDelete._id).then(() => {
      const newCards = cards.filter((i) => i._id !== cardDelete._id);
      setCards(newCards);
      closeAllPopups();
    });
  }
}*/

  // **DOM
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <ArticlesContext.Provider value={savedNews}>
      <div className="App">
        <PopupWithForm isOpen={isLoginPopupOpen} setUserEmail={setUserEmail} setUserPassword={setUserPassword} setUserName={setUserName}  handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} setLoggedIn={setLoggedIn} onClose={handlePopupClose} setArticles={setArticles} setCurrentUser={setCurrentUser} />
        <TooltipPopup isOpen={isInformationPopupOpen} onClose={handlePopupClose} handleLoginClick={handleLoginClick} />
        <Route exact path='/'>
          <div className='App__background App__background-image'>
            <Header logOut={logOut} setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} loggedIn={loggedIn} isSavedNewsPage={isSavedNewsPage} handleLoginClick={handleLoginClick}/>
            <ScrollTo>
            {({ scroll }) => (
            <SearchForm scroller={() => scroll({ y: 550, smooth: true })} isDataLoaded={isDataLoaded} setArticles={setArticles} setDataLoaded={setDataLoaded} setSearchError={setSearchError} setResponseSending={setResponseSending} />
            )}
            </ScrollTo>
          </div>
            <Main updateSavedNews={updateSavedNews} savedNews={savedNews} loggedIn={loggedIn} articles={articles} isSavedNewsPage={isSavedNewsPage} isDataLoaded={isDataLoaded} searchError={searchError} isResponseSending={isResponseSending} isInformationPopup={isInformationPopupOpen} currentUser={currentUser} />
        </Route>
          <Switch>
            <ProtectedRoute path='/saved-pages'>
              <div className='App__background'>
                <Header logOut={logOut} isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} handleLoginClick={handleLoginClick} loggedIn={loggedIn} />
                </div>
                <SavedNews loggedIn={loggedIn} articles={articles} updateSavedNews={updateSavedNews} currentUser={currentUser} isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} savedNews={savedNews} />
            </ProtectedRoute>
          <Footer />
              <Route>
                {loggedIn ? <Redirect to="/saved-pages" /> : <Redirect to="/" />}
              </Route>
            </Switch>
      </div>
    </ArticlesContext.Provider>
    </CurrentUserContext.Provider>
  )
};

// **экспорт
export default App;
