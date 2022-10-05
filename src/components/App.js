import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import apiMain from '../utils/MainApi';
import ProtectedRoute from '../utils/ProtectedRoute';
import { withRouter } from '../utils/withRouter';
import { CurrentUserContext } from './Contexts/CurrentUserContext';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import SavedMovies from './SavedMovies/SavedMovies';


function App(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const location = useLocation().pathname;

  function getFooter() {
    if (location === '/' || location === '/movies' || location === '/saved-movies')
      return <Footer />;
  }

  function handleSaveMovie() { }

  function onProfile({ name, email }) {
    apiMain.updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        // this.handleInfoTooltip(true);
        // navigate('/movies'); // перенаправляется на фильмы
      })
      .catch((err) => {
        // this.handleInfoTooltip(false);
      });
  }

  function onRegister({ name, email, password }) {
    apiMain.signup({ name, email, password })
      .then((result) => {
        onLogin(); //сразу авторизуется
        // navigate('/movies'); // перенаправляется на фильмы
        // this.handleInfoTooltip(true);
      })
      .catch((err) => {
        // this.handleInfoTooltip(false);
      });
  }

  React.useEffect(() => {
    checkUserToken();

    return function () {
      console.log('unmount app');
    }
  }, [isLoggedIn]);

  function checkUserToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      apiMain.checkToken(token)
        .then((result) => {
          if (result) {
            console.log('user ok');
            setCurrentUser({
              name: result.name,
              email: result.email,
            });
            setIsLoggedIn(true);
            navigateMovies();
          }
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }

  function navigateMovies() {
    props.navigate('/movies');
  }

  function onLogin({ name, email }) {
    setIsLoggedIn(true);
    setCurrentUser({
      name: name,
      email: email,
    });

    navigateMovies(); // перенаправляется на фильмы
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/profile' element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile onProfile={onProfile} />
              </ProtectedRoute>
            }
            />
            <Route path='/signup' element={<Register onRegister={onRegister} />} />
            <Route path='/signin' element={<Login onLogin={onLogin} />} />
            <Route path='/movies' element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies onClick={handleSaveMovie} />
              </ProtectedRoute>
            }
            />
            <Route path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {getFooter()}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
