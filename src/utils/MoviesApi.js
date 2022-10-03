class MoviesApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
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