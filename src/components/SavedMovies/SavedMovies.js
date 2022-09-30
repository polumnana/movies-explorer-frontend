import Header from "../Header/Header";
import HeaderAuthorized from "../Header/HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import DeleteButton from "../../images/Delete.svg";

function SavedMovies() {
    return (
        <>
            <Header>
                <HeaderAuthorized />
            </Header>
            <SearchForm />
            <Gallery ImgButton={DeleteButton} />
            <Footer />
        </>
    )
}

export default SavedMovies;