import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import apiMovie from "../../utils/MoviesApi";

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