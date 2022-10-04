class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    // запрос на получение всех фильмов
    fetchMovies() {
        return fetch(this._baseUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const apiMovie = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default apiMovie;