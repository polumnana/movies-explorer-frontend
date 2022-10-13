class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  //Регистрация
  signup({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    }).then(this._checkResponse);//Проверка ответа
  }

  //Вход
  signin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);//Проверка ответа
  }

  //Проверка валидности токена и получения email для хедера
  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkResponse);//Проверка ответа
  }

  fetchUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  updateUserInfo({ name, email }) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(this._checkResponse);
  }

  fetchSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      headers: this._getHeaders(),
    }).then(this._checkResponse)
      .then(movies => movies.map(movie => this._convertMovie(movie)));
  }

  // запрос на сохранение фильма
  addMovie(movie) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.thumbnail || movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail || movie.image.url,
        owner: movie.owner,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    }).then(this._checkResponse)
      .then(this._convertMovie);
  }

  // запрос на удаление фильма
  deleteMovie(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    }).then(this._checkResponse)
      .then(this._convertMovie);
  }

  _getToken() {
    return `Bearer ${localStorage.getItem('jwt')}`;
  }

  _getHeaders() {
    return {
      'Authorization': this._getToken(),
      'Content-Type': 'application/json'
    };
  }

  _convertMovie(movie) {
    movie.id = movie.movieId;
    return movie;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const apiMain = new MainApi({
  baseUrl: 'https://polumnana.movies.api.nomorepartiesxyz.ru',
});

export default apiMain;
