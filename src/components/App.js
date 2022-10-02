import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Header from './Header/Header';
import HeaderAuthorized from './Header/HeaderAuthorized/HeaderAuthorized';
import HeaderUnauthorized from './Header/HeaderUnauthorized/HeaderUnauthorized';
import Footer from './Footer/Footer';

function App() {

  const location = useLocation().pathname;

  function getHeader() {
    if (location === '/profile' || location === '/movies' || location === '/saved-movies')
      return <Header><HeaderAuthorized /></Header>;
    else if (location === '/')
      return <Header><HeaderUnauthorized /></Header>;
  }

  function getFooter() {
    if (location === '/' || location === '/movies' || location === '/saved-movies')
      return <Footer />;
  }

  return (
    <div className="App">
      <div className='page'>
        {getHeader()}
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
          </Routes>
        </main>
        {getFooter()}
      </div>
    </div>
  );
}

export default App;
