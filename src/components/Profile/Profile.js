import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <form
                className="profile__form"
                name="profile" >
                <label className="profile__label">
                    <h2 className="profile__subtitle">Имя</h2>
                    <input
                        className="profile__input"
                        type="name"
                        id="profile-name-input"
                        placeholder="Введите ваше имя"
                        name="name"
                        minLength="2"
                        maxLength="30"
                        value=""
                        required
                    />
                </label>
                <span className="profile__input_type-error name-input-error">Ошибка ошибка ошибка много ошибок</span>


                <label className="profile__label">
                    <h2 className="profile__subtitle">E-mail</h2>
                    <input
                        className="profile__input"
                        type="email"
                        id="profile-email-input"
                        placeholder="Email"
                        name="email"
                        minLength="4"
                        maxLength="40"
                        value=""
                        required />
                </label>
                <span className="profile__input_type-error email-input-error">Ошибка ошибка ошибка много ошибок</span>

                <section className="profile__navigation">
                    <button className="profile__button-edit">Редактировать</button>
                    <Link to="/" className="profile__signout-link">Выйти из аккаунта</Link>
                </section>

                <section className="profile__submit">
                    <span className="profile__submit_type-error profile-submit-error">При обновлении профиля произошла ошибка.</span>
                    <button
                        className="profile__submit-button"
                        type="submit"
                    >Сохранить
                    </button>
                </section>

            </form>
        </section>
    )
}

export default Profile;