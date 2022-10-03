import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';


function Login(props) {
    const [email, setEmail] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState('');
    const [isValidEmail, setValidityEmail] = React.useState(false);

    const [password, setPassword] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [isValidPassword, setValidityPassword] = React.useState(false);


    function handleChangeEmail(evt){
        const input = evt.target;
        setEmail(input.value);

        setValidityEmail(input.validity.valid);
        if (!isValidEmail) {
          setErrorEmail(input.validationMessage);
        } else {
          setErrorEmail('');  
        }
    }

    function handleChangePassword(evt){
        const input = evt.target;
        setPassword(input.value);

        setValidityPassword(input.validity.valid);
        if (!isValidPassword) {
          setErrorPassword(input.validationMessage);
        } else {
          setErrorPassword('');  
        }
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.onSubmit({email, password});
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
                    onSubmit={handleSubmit}>

                    <label className="login__label">
                        <h2 className="login__subtitle">E-mail</h2>
                        <input
                            className="login__input"
                            type="email"
                            onChange={handleChangeEmail}
                            id="login-email-input"
                            placeholder="Email"
                            name="email"
                            minLength="4"
                            maxLength="40"
                            value={email}
                            required
                        />
                    </label>
                    <span className="login__type-input-error email-input-error">{errorEmail}</span>

                    <label className="login__label">
                        <h2 className="login__subtitle">Пароль</h2>
                        <input
                            className="login__input"
                            type="password"
                            onChange={handleChangePassword}
                            id="login-password-input"
                            placeholder="Пароль"
                            name="password"
                            minLength="6"
                            maxLength="200"
                            value={password}
                            required />
                    </label>
                    <span className="login__type-input-error password-input-error">{errorPassword}</span>

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