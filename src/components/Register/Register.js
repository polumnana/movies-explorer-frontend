import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';


function Register(props) {

    return (
        <section className="register">
            <Link
                to="/"
                className="register__logo">
                <img className="register__img" src={Logo} alt="Логотип"></img>
            </Link>

            <h2 className="register__title">Добро пожаловать!</h2>
            <form
                className="register__form"
                name="register" >
                <label className="register__label">
                    <h2 className="register__subtitle">Имя</h2>
                    <input
                        className="register__input"
                        type="name"
                        id="register-name-input"
                        placeholder="Введите ваше имя"
                        name="name"
                        minLength="2"
                        maxLength="30"
                        value=""
                        required
                    />
                </label>
                <span className="register__type-input-error name-input-error"></span>

                <label className="register__label">
                    <h2 className="register__subtitle">E-mail</h2>
                    <input
                        className="register__input"
                        type="email"
                        id="register-email-input"
                        placeholder="Email"
                        name="email"
                        minLength="4"
                        maxLength="40"
                        value=""
                        required
                    />
                </label>
                <span className="register__type-input-error email-input-error"></span>

                <label className="register__label">
                    <h2 className="register__subtitle">Пароль</h2>
                    <input
                        className="register__input"
                        type="password"
                        id="register-password-input"
                        placeholder="Пароль"
                        name="password"
                        minLength="6"
                        maxLength="200"
                        value=""
                        required />
                </label>
                <span className="register__input_type-error password-input-error"></span>

                <section className="register__submit">
                    <span className="register__submit_type-error register-submit-error"></span>
                    <button
                        className="register__submit-button"
                        type="submit"
                    >Зарегистрироваться
                    </button>
                </section>

                <div className="register__signin">
                    <p className="register__signin-text">Уже зарегистрированы? </p>
                    <Link to="/signin" className="register__signin-link">Войти</Link>
                </div>

            </form>
        </section>
    )
}

export default Register;