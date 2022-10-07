import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import apiMain from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validate.js';


function Register(props) {

  const { values, handleChange, errors, isValid, setErrors } = useFormWithValidation();

  const registerButtonClass = !isValid
    ? "register__submit-button register__submit-button_inactive"
    : "register__submit-button";

  function handleSubmit(evt) {
    evt.preventDefault();

    apiMain
      .signup({
        name: values.name,
        email: values.email,
        password: values.password
      }).then((result) => {
        props.onRegister({ email: values.email, password: values.password });
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, 'errorsLogin': err });
      });
  }

  return (
    <section className="register">
      <article className="register__container">
        <Link
          to="/"
          className="register__logo">
          <img className="register__img" src={Logo} alt="Логотип"></img>
        </Link>

        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit} >

          <label className="register__label">
            <h2 className="register__subtitle">Имя</h2>
            <input
              className="register__input"
              type="name"
              onChange={handleChange}
              id="register-name-input"
              placeholder="Введите ваше имя"
              name="name"
              minLength="2"
              maxLength="30"
              pattern="[A-Za-zА-Яа-яЁё\s-]+"
              value={values.name}
              required
            />
          </label>
          <span className="register__type-input-error name-input-error">{errors.name}</span>

          <label className="register__label">
            <h2 className="register__subtitle">E-mail</h2>
            <input
              className="register__input"
              type="email"
              onChange={handleChange}
              id="register-email-input"
              placeholder="Email"
              name="email"
              minLength="4"
              maxLength="40"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$"
              value={values.email}
              required
            />
          </label>
          <span className="register__type-input-error email-input-error">{errors.email}</span>

          <label className="register__label">
            <h2 className="register__subtitle">Пароль</h2>
            <input
              className="register__input"
              type="password"
              onChange={handleChange}
              id="register-password-input"
              placeholder="Пароль"
              name="password"
              minLength="6"
              maxLength="200"
              value={values.password}
              required />
          </label>
          <span className="register__type-input-error password-input-error">{errors.password}</span>

          <section className="register__submit">
            <span className="register__submit_type-error register-submit-error">{errors.errorsLogin}</span>
            <button
              className={registerButtonClass}
              type="submit"
              disabled={!isValid}
            >Зарегистрироваться
            </button>
          </section>

          <div className="register__signin">
            <p className="register__signin-text">Уже зарегистрированы? </p>
            <Link to="/signin" className="register__signin-link">Войти</Link>
          </div>

        </form>
      </article>
    </section>
  )
}

export default Register;