import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderUnauthorized from "../Header/HeaderUnauthorized/HeaderUnauthorized";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";


function Main() {
    return (
        <>
            <Header>
                <HeaderUnauthorized />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </>
    )
}

export default Main;