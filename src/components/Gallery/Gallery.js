import React from "react";
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

    if (width <= 480) {
      setDisplayMovies(5);
      setMoviesToAdd(2)
    } else if (width > 480 && width <= 768) {
      setDisplayMovies(8);
      setMoviesToAdd(2)
    } else if (width > 768 && width <= 1280) {
      setDisplayMovies(12);
      setMoviesToAdd(3);
    } else if (width > 1280) {
      setDisplayMovies(16);
      setMoviesToAdd(4);
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