import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";

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