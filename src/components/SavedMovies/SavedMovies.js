import React from "react";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {

  return (
    <>
      <SearchForm
        onSearch={props.onSearch}
      />
      <Gallery
        isSavedMoviesPage={true}
        showButton={false}
        movies={props.movies}
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
        savedMovies={props.savedMovies} />
    </>
  )
}

export default SavedMovies;