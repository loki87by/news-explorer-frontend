// **импорты
import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';
/* isSavedNewsPage - header, navi, newsCardList, newsCardPanel
isDataLoaded, isResponseSending - main
loggedIn - navi, newsCardPanel
setLoginPopupOpen, name(user) - navi
article - newsCard, newsCardList, newsCardPanel
кучу всего в попапы
searchError - прелоудер
newsQuantity, hashtags, name(user) - шапка новостей

*/

// **Функционал
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
};

export default App;
