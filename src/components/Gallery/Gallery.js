import React from "react";
import Movie from "../Movie/Movie";
import NotFoundMovies from "../NotFoundMovies/NotFoundMovies";

function Gallery(props) {
  return (
    <section className="gallery">

      {(props.error || props.message) &&
        <NotFoundMovies
          error={props.error}
          message={props.message} />
      }

      <section className="gallery__elements">
        {props.movies.map((movie) => (
          <Movie
            isSavedMoviesPage={props.isSavedMoviesPage}
            onDeleteMovie={props.onDeleteMovie}
            onSaveMovie={props.onSaveMovie}
            savedMovies={props.savedMovies}
            movie={movie}
            key={movie.id} />
        ))}
      </section>
      {props.showButton &&
        <button className="gallery__button" type="button">Ещё</button>
      }
    </section>
  );
}

export default Gallery;