import Header from "../Header/Header";
import HeaderAuthorized from "../Header/HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import NoSavedButton from "../../images/NoSaved.svg";

function Movies() {
    return (
        <>
            <Header>
                <HeaderAuthorized />
            </Header>
            <SearchForm />
            <Gallery  imgButton={NoSavedButton} />
            <Footer />
        </>
    )
}

export default Movies;