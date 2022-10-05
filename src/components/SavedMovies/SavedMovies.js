import React from "react";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {

  const [movies, setMovies] = React.useState([]);


  return (
    <>
      <SearchForm />
      <Gallery movies={movies} />
    </>
  )
}

export default SavedMovies;