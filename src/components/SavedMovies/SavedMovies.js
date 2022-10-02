import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import DeleteButton from "../../images/Delete.svg";

function SavedMovies() {
    return (
        <>
            <SearchForm />
            <Gallery ImgButton={DeleteButton} />
        </>
    )
}

export default SavedMovies;