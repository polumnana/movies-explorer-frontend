import React from "react";
import Gallery from "../Gallery/Gallery";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <>
      <SearchForm
        onSearch={props.onSearch}
        onSetCheckbox={props.onSetCheckbox}
        searchText={props.searchText}
        checkboxState={props.checkboxState}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <Gallery
          isSavedMoviesPage={false}
          showButton={true}
          movies={props.movies}
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          savedMovies={props.savedMovies}
          error={props.error}
          message={props.message} />
      )
      }
    </>
  )
}

export default Movies;