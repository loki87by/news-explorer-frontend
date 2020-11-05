// **импорты
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
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
import './App.css';
import './styles/App__background.css';
import './styles/App__background-image.css';

// **Функционал
function App() {
  // *стейты
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isInformationPopupOpen, setInformationPopupOpen] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ name: 'testUser'});
  const [isResponseSending, setResponseSending] = React.useState(false);
  const [isDataLoaded, setDataLoaded] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');
  const [isSavedNewsPage, setSavedNewsPage] = React.useState(false);
  const [savedNews, updateSavedNews] = React.useState([]);

  const history = useHistory();

  // *открытие окна авторизации
  function handleLoginClick() {
    setLoginPopupOpen(true);
  }

  // *открытие оповещения успешной регистрации
  function registrationAcces() {
    setInformationPopupOpen(true);
  }

  // *закрытие модальных окон
  function handlePopupClose() {
    setLoginPopupOpen(false);
    setInformationPopupOpen(false);
  }

  // *выход из аккаунта
  function logOut(){
    setSavedNewsPage(false);
    setLoggedIn(false);
    history.push('/');
  }

  // **DOM
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <ArticlesContext.Provider value={savedNews}>
      <div className="App">
        <PopupWithForm isOpen={isLoginPopupOpen} setInformationPopupOpen={setInformationPopupOpen} handleLoginClick={handleLoginClick} registrationAcces={registrationAcces} setLoggedIn={setLoggedIn} onClose={handlePopupClose} setArticles={setArticles} setCurrentUser={setCurrentUser} />
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
        <Route path='/saved-pages'>
          <div className='App__background'>
            <Header logOut={logOut} isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} handleLoginClick={handleLoginClick} loggedIn={loggedIn} />
            </div>
            <SavedNews loggedIn={loggedIn} articles={articles} updateSavedNews={updateSavedNews} currentUser={currentUser} isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} savedNews={savedNews} />
        </Route>
        <Footer />
      </div>
    </ArticlesContext.Provider>
    </CurrentUserContext.Provider>
  )
};

// **экспорт
export default App;
