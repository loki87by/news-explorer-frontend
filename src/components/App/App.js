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
// import {ArticlesContext} from '../../contexts/CurrentUserContext';
//import background from '../../images/82f1206f112335e2ee4d938ba64f02d6-min.jpg'
import './App.css';
import './App__background.css'
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
  const [isSavedNewsPage, setSavedNewsPage] = React.useState(false)

  function handleLoginClick() {
    setLoginPopupOpen(true);
  }

  function handlePopupClose() {
    setLoginPopupOpen(false);
    setInformationPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <PopupWithForm isOpen={isLoginPopupOpen} setLoggedIn={setLoggedIn} onClose={handlePopupClose} setArticles={setArticles} setCurrentUser={setCurrentUser} />
        <Route path='/'>
          <div className='App__background'>
            <Header setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} loggedIn={loggedIn} isSavedNewsPage={isSavedNewsPage} handleLoginClick={handleLoginClick}/>
            <SearchForm isDataLoaded={isDataLoaded} setArticles={setArticles} setDataLoaded={setDataLoaded} setSearchError={setSearchError} setResponseSending={setResponseSending} />
          </div>
          <Main loggedIn={loggedIn} articles={articles} isSavedNewsPage={isSavedNewsPage} isDataLoaded={isDataLoaded} searchError={searchError} isResponseSending={isResponseSending} isInformationPopup={isInformationPopupOpen} currentUser={currentUser} />
        </Route>
        <Route path='/saved-pages'>
          <Header isSavedNewsPage={isSavedNewsPage} setSavedNewsPage={setSavedNewsPage} currentUser={currentUser} handleLoginClick={handleLoginClick} loggedIn={loggedIn} />
          <SavedNews />
        </Route>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;
