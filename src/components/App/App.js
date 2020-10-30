// **импорты
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {ArticlesContext} from '../../contexts/ArticlesContext';
import './App.css';
import './styles/App__background.css'
import './styles/App__background-image.css'
/* isSavedNewsPage - header, navi, newsCardList, newsCardPanel
isDataLoaded, isResponseSending - main
loggedIn - navi, newsCardPanel
кучу всего в попапы
searchError - прелоудер
newsQuantity, hashtags - шапка новостей
*/

// **Функционал
function App() {
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

  function handleLoginClick() {
    setLoginPopupOpen(true);
  }

  function handlePopupClose() {
    setLoginPopupOpen(false);
    setInformationPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <ArticlesContext.Provider value={savedNews}>
      <div className="App">
        <PopupWithForm isOpen={isLoginPopupOpen} setLoggedIn={setLoggedIn} onClose={handlePopupClose} setArticles={setArticles} setCurrentUser={setCurrentUser} />
        <Route exact path='/'>
          <div className='App__background App__background-image'>
            <Header setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} loggedIn={loggedIn} isSavedNewsPage={isSavedNewsPage} handleLoginClick={handleLoginClick}/>
            <SearchForm isDataLoaded={isDataLoaded} setArticles={setArticles} setDataLoaded={setDataLoaded} setSearchError={setSearchError} setResponseSending={setResponseSending} />
          </div>
          <Main updateSavedNews={updateSavedNews} savedNews={savedNews} loggedIn={loggedIn} articles={articles} isSavedNewsPage={isSavedNewsPage} isDataLoaded={isDataLoaded} searchError={searchError} isResponseSending={isResponseSending} isInformationPopup={isInformationPopupOpen} currentUser={currentUser} />
        </Route>
        <Route path='/saved-pages'>
          <div className='App__background'>
            <Header isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} handleLoginClick={handleLoginClick} loggedIn={loggedIn} />
            </div>
            <SavedNews loggedIn={loggedIn} articles={articles} currentUser={currentUser} isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} savedNews={savedNews} />
        </Route>
        <Footer />
      </div>
    </ArticlesContext.Provider>
    </CurrentUserContext.Provider>
  )
};

export default App;
