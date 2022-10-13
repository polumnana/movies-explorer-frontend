import React from "react";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {

  React.useEffect(() => {
    props.onSearch("", false);
  }, []);

  return (
    <>
      <SearchForm
        onSearch={props.onSearch}
        onSetCheckbox={props.onSetCheckbox}
        searchText={props.searchText}
        checkboxState={props.checkboxState}
      />
      <Gallery
        isSavedMoviesPage={true}
        showButton={false}
        movies={props.movies}
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
        savedMovies={props.savedMovies}
        error={props.error}
        message={props.message} />
    </>
  )
}

export default SavedMovies;