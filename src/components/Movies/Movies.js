import React from "react";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <>
      <SearchForm />
      <Gallery
        movies={props.movies}
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
        savedMovies={props.savedMovies} />
    </>
  )
}

export default Movies;