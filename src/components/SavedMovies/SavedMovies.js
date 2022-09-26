import Header from "../Header/Header";
import HeaderAuthorized from "../Header/HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <>
            <Header>
                <HeaderAuthorized />
            </Header>
            <SearchForm />
            <Gallery />
            <Footer />
        </>
    )
}

export default SavedMovies;