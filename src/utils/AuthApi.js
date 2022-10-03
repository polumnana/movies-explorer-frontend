class AuthApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    //Регистрация
    signup({name, email, password}) {
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
    signin({email, password}) {

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

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const apiAuth = new AuthApi({
    baseUrl: 'https://polumnana.movies.api.nomorepartiesxyz.ru',
});

export default apiAuth;



