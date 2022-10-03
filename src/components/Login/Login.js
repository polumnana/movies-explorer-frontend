import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import { useFormWithValidation } from '../../utils/validate.js';


function Login(props) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt){
        evt.preventDefault();
        console.log(1);
        // props.onSubmit({values.email, values.password});
    }

    return (
        <section className="login">
            <article className="login__container">
                <Link
                    to="/"
                    className="login__logo">
                    <img className="login__img" src={Logo} alt="Логотип"></img>
                </Link>

                <h2 className="login__title">Рады видеть!</h2>
                <form
                    className="login__form"
                    name="login" 
                    onSubmit={handleSubmit} >

                    <label className="login__label">
                        <h2 className="login__subtitle">E-mail</h2>
                        <input
                            className="login__input"
                            type="email"
                            onChange={handleChange}
                            id="login-email-input"
                            placeholder="Email"
                            name="email"
                            minLength="4"
                            maxLength="40"
                            value={values.email}
                            required
                        />
                    </label>
                    <span className="login__type-input-error email-input-error">{errors.email}</span>

                    <label className="login__label">
                        <h2 className="login__subtitle">Пароль</h2>
                        <input
                            className="login__input"
                            type="password"
                            onChange={handleChange}
                            id="login-password-input"
                            placeholder="Пароль"
                            name="password"
                            minLength="6"
                            maxLength="200"
                            value={values.password}
                            required />
                    </label>
                    <span className="login__type-input-error password-input-error">{errors.password}</span>

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
            </article>
        </section>
    )
}

export default Login;