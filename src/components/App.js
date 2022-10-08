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

  const [isLoading, setIsLoading] = React.useState(false);

  const [searchTextMovies, setSearchTextMovies] = React.useState('');
  const [searchTextSavedMovies, setSearchTextSavedMovies] = React.useState('');
  const [moviesCheckbox, setMoviesCheckbox] = React.useState(false);
  const [savedMoviesCheckbox, setSavedMoviesCheckbox] = React.useState(false);

  const [moviesError, setMoviesError] = React.useState('');
  const [savedMoviesError, setSavedMoviesError] = React.useState('');

  const [moviesMessage, setMoviesMessage] = React.useState('');
  const [savedMoviesMessage, setSavedMoviesMessage] = React.useState('');

  const somethingWrong = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.";

  function handleSaveMovie(movie) {
    apiMain
      .addMovie(movie)
      .then((savedMovie) => {
        const arr = [savedMovie, ...savedMovies];
        setSavedMovies(arr);
        setFilteredSavedMovies(arr);
      })
      .catch((err) => {
        console.error(err);
        if (location === '/movies')
          setMoviesError(somethingWrong);
        else if (location === "/saved-movies")
          setSavedMoviesError(somethingWrong);
      });
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find((item) => item.id === movie.id);
    apiMain
      .deleteMovie(savedMovie._id)
      .then((data) => {
        const arr = savedMovies.filter((m) => m.id !== data.movieId);
        setSavedMovies(arr);
        setFilteredSavedMovies(arr);
      })
      .catch((err) => {
        console.error(err);
        if (location === '/movies')
          setMoviesError(somethingWrong);
        else if (location === "/saved-movies")
          setSavedMoviesError(somethingWrong);
      });
  }

  function onEditProfile({ name, email }) {
    setCurrentUser({ name, email });
  }

  React.useEffect(() => {
    checkUserToken();

    setSearchTextMovies(localStorage.getItem('searchTextMovies'));
    setSearchTextSavedMovies(localStorage.getItem('searchTextSavedMovies'));

    setMoviesCheckbox(localStorage.getItem('moviesCheckbox') === 'true');
    setSavedMoviesCheckbox(localStorage.getItem('savedMoviesCheckbox') === 'true');

    if (isLoggedIn) {
      apiMain
        .fetchSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          setFilteredSavedMovies([]);
        })
        .catch((err) => {
          console.error(err);
          if (location === '/movies')
            setMoviesError(somethingWrong);
          else if (location === "/saved-movies")
            setSavedMoviesError(somethingWrong);
        });

      const arr = JSON.parse(localStorage.getItem('allmovies') || '[]');
      setAllMovies(arr);
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      handleSearchSavedMovies(searchTextSavedMovies, savedMoviesCheckbox);
    }
  }, [isLoggedIn, searchTextSavedMovies, savedMoviesCheckbox, savedMovies]);

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
            props.navigate(location);
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
        console.error(err);

        if (location === '/movies')
          setMoviesError(somethingWrong);
        else if (location === "/saved-movies")
          setSavedMoviesError(somethingWrong);
      });
  }

  function onLogout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setFilteredMovies([]);
    setFilteredSavedMovies([]);
    props.navigate('/');
  }

  function handleSearch(searchText, moviesCheckbox) {
    searchText = searchText.trim().toLowerCase();

    if (searchText === '') {
      setMoviesError('Нужно ввести ключевое слово');
      setFilteredMovies([]);
      return;
    }

    setMoviesError('');
    setMoviesMessage('');
    setSearchTextMovies(searchText);
    localStorage.setItem('searchTextMovies', searchText);

    if (!localStorage.getItem('allmovies')) {
      setIsLoading(true);
      apiMovie
        .fetchMovies()
        .then((res) => {
          localStorage.setItem('allmovies', JSON.stringify(res));
          setAllMovies(res);

          let result = res.filter(movie => movie.nameRU.toLowerCase().includes(searchText));
          if (moviesCheckbox) {
            result = result.filter(movie => movie.duration < 40);
          }

          setFilteredMovies(result);
        })
        .catch((err) => {
          console.error(err);

          setMoviesError(somethingWrong);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      let result = allMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchText));
      if (moviesCheckbox) {
        result = result.filter(movie => movie.duration < 40);
      }

      setFilteredMovies(result);
      if (result.length === 0) {
        setMoviesMessage('Ничего не найдено');
      }
    }
  }

  function handleSetCheckboxMovies(value) {
    setMoviesCheckbox(value);
    localStorage.setItem('moviesCheckbox', value);

    if (searchTextMovies)
      handleSearch(searchTextMovies, value);
  }

  function handleSetCheckboxSavedMovies(value) {
    setSavedMoviesCheckbox(value);
    localStorage.setItem('savedMoviesCheckbox', value);

    if (searchTextSavedMovies)
      handleSearchSavedMovies(searchTextSavedMovies, value);
  }

  function handleSearchSavedMovies(searchText, savedMoviesCheckbox) {
    searchText = searchText.trim().toLowerCase();

    setSearchTextSavedMovies(searchText);
    localStorage.setItem('searchTextSavedMovies', searchText);
    setSavedMoviesMessage('');

    let result = savedMovies;
    if (searchText !== '') {
      result = result.filter(movie => movie.nameRU.toLowerCase().includes(searchText))
    }

    if (savedMoviesCheckbox) {
      result = result.filter(movie => movie.duration < 40);
    }

    setFilteredSavedMovies(result);

    if (result.length === 0) {
      setSavedMoviesMessage('Ничего не найдено');
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound navigate={props.navigate} />} />
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
                  isLoading={isLoading}
                  movies={filteredMovies}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                  onSearch={handleSearch}
                  onSetCheckbox={handleSetCheckboxMovies}
                  searchText={searchTextMovies}
                  checkboxState={moviesCheckbox}
                  error={moviesError}
                  message={moviesMessage}
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
                    onSearch={handleSearchSavedMovies}
                    onSetCheckbox={handleSetCheckboxSavedMovies}
                    searchText={searchTextSavedMovies}
                    checkboxState={savedMoviesCheckbox}
                    error={savedMoviesError}
                    message={savedMoviesMessage}
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
