import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';


function Login(props) {

    return (
        <section className="login">
            <div className="login__logo">
                <img className="login__img" src={Logo} alt="Логотип"></img>
            </div>

            <h2 className="login__title">Рады видеть!</h2>
            <form
                className="login__form"
                name="login" >

                <label className="login__label">
                    <h2 className="login__subtitle">E-mail</h2>
                    <input
                        className="login__input"
                        type="email"
                        id="login-email-input"
                        placeholder="Email"
                        name="email"
                        minLength="4"
                        maxLength="40"
                        value=""
                        required
                    />
                </label>
                <span className="login__type-input-error email-input-error"></span>

                <label className="login__label">
                    <h2 className="login__subtitle">Пароль</h2>
                    <input
                        className="login__input"
                        type="password"
                        id="login-password-input"
                        placeholder="Пароль"
                        name="password"
                        minLength="6"
                        maxLength="200"
                        value=""
                        required />
                </label>
                <span className="login__input_type-error password-input-error"></span>

                <section className="login__submit">
                    <span className="login__submit_type-error login-submit-error"></span>
                    <button
                        className="login__submit-button"
                        type="submit"
                    >Войти
                    </button>
                </section>

                <div className="login__signin">
                    <p className="login__signin-text">Ещё не зарегистрированы? </p>
                    <Link to="/signup" className="login__signin-link">Зарегистрироваться</Link>
                </div>

            </form>
        </section>
    )
}

export default Login;