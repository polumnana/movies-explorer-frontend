import React from "react";
import NoSavedButton from "../../images/NoSaved.svg";
import SavedButton from "../../images/Saved.svg";


function Movie(props) {

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем??
  const isSaved = props.savedMovies.some(m => m.id === props.movie.id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const buttonImg = (
    `${isSaved ? SavedButton : NoSavedButton}`
  );

  const altImg = (
    `${isSaved ? "Сохранено" : "Сохранить"}}`
  );

  function handleClick() {
    if (isSaved)
      props.onDeleteMovie();
    else
      props.onSaveMovie();
  }

  return (
    <section className="movie">
      <h1 className="movie__title">{props.movie.nameRU}</h1>
      <p className="movie__duration">{props.movie.duration + `м`}</p>
      <button
        className="movie__button"
        type="button"
        onClick={handleClick}>
        <img className="movie__button-img" alt={altImg} src={buttonImg}></img>
      </button>
      <a className="movie__poster" href={props.movie.trailerLink}>
        <img className="movie__poster-img" alt={props.movie.image.alternativeText} src={'https://api.nomoreparties.co' + props.movie.image.url}></img>
      </a>
    </section>
  );
}

export default Movie;