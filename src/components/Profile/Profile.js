import React from "react";
import apiMain from "../../utils/MainApi.js";
import { useFormWithValidation } from '../../utils/validate.js';
import { CurrentUserContext } from '../Contexts/CurrentUserContext.js';

function Profile(props) {

  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
  const [classesListEditProfile, setClassesListEditProfile] = React.useState('profile__navigation_visible');
  const [classesListSubmitProfile, setClassesListSubmitProfile] = React.useState('');
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const currentUser = React.useContext(CurrentUserContext); // получаем значения из контекста

  const [editProfileStatus, setEditProfileStatus] = React.useState('');
  const [editProfileError, setEditProfileError] = React.useState('');

  const submitButtonClass = !isValid
    ? "profile__submit-button profile__submit-button_inactive"
    : "profile__submit-button";


  React.useEffect(() => {
    setValues({ ...values, username: currentUser.name, email: currentUser.email });
  }, [editProfileStatus, editProfileError]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onEditProfile({ name: values.username, email: values.email });
  }

  function onEditProfile({ name, email }) {
    apiMain.updateUserInfo({ name, email })
      .then(() => {
        props.onEditProfile({ name, email });
        setClassesListSubmitProfile('');
        setClassesListEditProfile('profile__navigation_visible');
        setEditProfileStatus('Сохранено');
        resetForm();
        setIsFormDisabled(true);
      })
      .catch(() => {
        setEditProfileError('Произошла ошибка, попробуйте снова');
      });
  }

  function handleEditProfile() {
    setClassesListSubmitProfile('profile__submit_visible');
    setClassesListEditProfile('');
    setIsFormDisabled(false);
    setEditProfileStatus('');
    setEditProfileError('');
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        name="profile"
        onSubmit={handleSubmit} >
        <label className="profile__label">
          <h2 className="profile__subtitle">Имя</h2>
          <input
            className="profile__input"
            type="name"
            onChange={handleChange}
            id="profile-name-input"
            placeholder="Введите ваше имя"
            name="username"
            minLength="2"
            maxLength="30"
            pattern="[A-Za-zА-Яа-яЁё\s-]+"
            value={values.username}
            required
            disabled={isFormDisabled}
          />
        </label>
        <span className="profile__input_type-error name-input-error">{errors.username}</span>


        <label className="profile__label">
          <h2 className="profile__subtitle">E-mail</h2>
          <input
            className="profile__input"
            type="email"
            onChange={handleChange}
            id="profile-email-input"
            placeholder="Email"
            name="email"
            minLength="4"
            maxLength="40"
            // pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$"
            value={values.email}
            required
            disabled={isFormDisabled}
          />
        </label>
        <span className="profile__input_type-error">{errors.email}</span>

        <section className={`profile__navigation ${classesListEditProfile}`}>
          <span className="profile__submit_type-error">{editProfileError}</span>
          <span className="profile__submit_type-success">{editProfileStatus}</span>

          <button
            className="profile__button-edit"
            type="button"
            onClick={handleEditProfile}
          >Редактировать</button>
          <button
            type="button"
            onClick={props.onLogout}
            className="profile__signout-link">Выйти из аккаунта</button>
        </section>

        <section className={`profile__submit ${classesListSubmitProfile}`}>
          <span className="profile__submit_type-error">{editProfileError}</span>
          <span className="profile__submit_type-success">{editProfileStatus}</span>

          <button
            className={submitButtonClass}
            disabled={!isValid}
            type="submit"
          >Сохранить
          </button>
        </section>

      </form>
    </section>
  )
}

export default Profile;