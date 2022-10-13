import React from "react";
import {
  ADDMOVIES_2,
  ADDMOVIES_3,
  ADDMOVIES_4,
  MOVIES_12,
  MOVIES_16,
  MOVIES_5,
  MOVIES_8,
  WIDTH_1280,
  WIDTH_480,
  WIDTH_768
} from "../../utils/constants";
import Movie from "../Movie/Movie";
import NotFoundMovies from "../NotFoundMovies/NotFoundMovies";

function Gallery(props) {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [displayMovies, setDisplayMovies] = React.useState(0);
  const [moviesToAdd, setMoviesToAdd] = React.useState(0);

  React.useEffect(() => {
    const onWindowResize = () => {
      setWidth(window.innerWidth);
    };

    if (width <= WIDTH_480) {
      setDisplayMovies(MOVIES_5);
      setMoviesToAdd(ADDMOVIES_2)
    } else if (width > WIDTH_480 && width <= WIDTH_768) {
      setDisplayMovies(MOVIES_8);
      setMoviesToAdd(ADDMOVIES_2)
    } else if (width > WIDTH_768 && width <= WIDTH_1280) {
      setDisplayMovies(MOVIES_12);
      setMoviesToAdd(ADDMOVIES_3);
    } else if (width > WIDTH_1280) {
      setDisplayMovies(MOVIES_16);
      setMoviesToAdd(ADDMOVIES_4);
    }

    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [width]);

  const handleClick = () => {
    setDisplayMovies((oldValue) => oldValue + moviesToAdd);
  };

  return (
    <section className="gallery">

      {(props.error || props.message) &&
        <NotFoundMovies
          error={props.error}
          message={props.message} />
      }

      <section className="gallery__elements">
        {props.movies.slice(0, displayMovies).map((movie) => (
          <Movie
            isSavedMoviesPage={props.isSavedMoviesPage}
            onDeleteMovie={props.onDeleteMovie}
            onSaveMovie={props.onSaveMovie}
            savedMovies={props.savedMovies}
            movie={movie}
            key={movie.id} />
        ))}
      </section>
      {props.showButton && displayMovies < props.movies.length &&
        <button className="gallery__button" type="button" onClick={handleClick}>Ещё</button>
      }
    </section>
  );
}

export default Gallery;