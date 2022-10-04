import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import NoSavedButton from "../../images/NoSaved.svg";

function Movies() {
    return (
        <>
            <SearchForm />
            <Gallery ImgButton={NoSavedButton} />
        </>
    )
}

export default Movies;