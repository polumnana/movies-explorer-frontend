import React from "react";
import DeleteButton from "../../images/Delete.svg";
import NoSavedButton from "../../images/NoSaved.svg";
import SavedButton from "../../images/Saved.svg";

function Movie(props) {

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем??
  const isSaved = props.savedMovies.some(m => m.id === props.movie.id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const buttonImg = (
    props.isSavedMoviesPage ?
      `${DeleteButton}` :
      `${isSaved ? SavedButton : NoSavedButton}`
  );

  const altImg = (
    `${isSaved ? "Сохранено" : "Сохранить"}`
  );

  const durationHours = Math.floor(props.movie.duration / 60);
  const durationMinutes = Math.floor(props.movie.duration % 60);

  const duration = durationHours > 0
    ? `${durationHours} ч ${durationMinutes} м`
    : `${durationMinutes} м`;

  function handleClick() {
    if (isSaved)
      props.onDeleteMovie(props.movie);
    else
      props.onSaveMovie(props.movie);
  }

  return (
    <section className="movie">
      <h1 className="movie__title">{props.movie.nameRU}</h1>
      <p className="movie__duration">{duration}</p>
      <button
        className="movie__button"
        type="button"
        onClick={handleClick}>
        <img className="movie__button-img" alt={altImg} src={buttonImg}></img>
      </button>
      <a className="movie__poster" href={props.movie.trailerLink}>
        <img className="movie__poster-img" alt={props.movie.nameRU} src={props.movie.thumbnail}></img>
      </a>
    </section>
  );
}

export default Movie;