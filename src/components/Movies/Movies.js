import React from "react";
import Gallery from "../Gallery/Gallery";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <>
      <SearchForm
        onSearch={props.onSearch}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <Gallery
          showButton={true}
          movies={props.movies}
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          savedMovies={props.savedMovies} />
      )
      }
    </>
  )
}

export default Movies;