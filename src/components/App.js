import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import apiMain from '../utils/MainApi';
import apiMovie from '../utils/MoviesApi';
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

  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);

  function handleSaveMovie(movie) {
    apiMain
      .addMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    apiMain
      .deleteMovie(movie)
      .then((data) => {
        const arr = savedMovies.filter((m) => m.id !== data.id);
        setSavedMovies(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

    if (isLoggedIn) {
      apiMain
        .fetchSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });

      apiMovie
        .fetchMovies()
        .then((res) => {
          setAllMovies(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoggedIn]);

  function checkUserToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      apiMain.checkToken(token)
        .then((result) => {
          if (result) {
            setCurrentUser({
              name: result.name,
              email: result.email,
            });
            setIsLoggedIn(true);
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
                <Movies
                  movies={filteredMovies}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
            />
            <Route path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    movies={filteredSavedMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                  />
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
