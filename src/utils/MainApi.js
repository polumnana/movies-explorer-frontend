class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    fetchSavedMovies() {
        return fetch(this._baseUrl + '/movies', {
            headers: this._getHeaders(),
        }).then(this._checkResponse);
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
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: movie.thumbnail,
                owner: movie.owner,
                movieId: movie.movieId,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
        }).then(this._checkResponse);
    }

    // запрос на удаление фильма
    deleteMovie(movieId) {
        return fetch(this._baseUrl + `/cards/${movieId}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        }).then(this._checkResponse);
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
