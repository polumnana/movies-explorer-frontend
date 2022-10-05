import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

  function handleSaveMovie() { }

  function onEditProfile({ name, email }) {
    apiMain.updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
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

  function onLoginSuccess({ name, email }) {
    setIsLoggedIn(true);
    setCurrentUser({
      name: name,
      email: email,
    });

    navigateMovies(); // перенаправляется на фильмы
  }

  function onRegister({ email, password }) {
    apiMain
      .signin({
        email: email,
        password: password
      }).then((result) => {
        if (result.token) {
          localStorage.setItem('jwt', result.token);
          onLoginSuccess({ email: email, name: result.name });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser({});
    props.navigate('/');
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
                <Profile onEditProfile={onEditProfile} onLogout={onLogout} />
              </ProtectedRoute>
            }
            />
            <Route path='/signup' element={<Register onRegister={onRegister} />} />
            <Route path='/signin' element={<Login onLogin={onLoginSuccess} />} />
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
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
