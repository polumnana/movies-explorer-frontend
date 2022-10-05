import React from "react";
import apiMovie from "../../utils/MoviesApi";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    apiMovie
      .fetchMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <>
      <SearchForm />
      <Gallery movies={movies} />
    </>
  )
}

export default Movies;