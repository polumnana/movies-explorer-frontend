import React from 'react';
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import ProtectedRoute from '../utils/ProtectedRoute';
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
import apiMain from '../utils/MainApi';
import { createContext } from 'react';
import { withRouter } from '../utils/withRouter';


function App(props) {
  const CurrentUserContext = createContext();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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

    return function lala() {
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

  function onLogin({ email, password }) {
    apiMain.signin({ email, password })
      .then((result) => {

        // this.handleInfoTooltip(true);

        if (result.token) {
          localStorage.setItem('jwt', result.token);


          setIsLoggedIn(true);
          setCurrentUser({
            name: result.name,
            email: result.email,
          });
          // this.updateCurrentUser();

          navigateMovies(); // перенаправляется на фильмы
        }

      })
      .catch((err) => {
        console.log(err);
        // this.handleInfoTooltip(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {getHeader()}
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
