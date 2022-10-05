import React from "react";
import Movie from "../Movie/Movie";

function Gallery(props) {
  return (
    <section className="gallery">
      <section className="gallery__elements">

        {props.movies.map((movie) => (
          <Movie
            onMovieDelete={props.onMovieDelete}
            onSave={props.onSave}
            movie={movie}
            key={movie.id} />
        ))}
      </section>
      <button className="gallery__button" type="button">Ещё</button>
    </section>
  );
}

export default Gallery;