import { Link } from "react-router-dom";
import BurgerMenuClose from "../../../images/BurgerMenuClose.svg";

function HeaderBurger() {
    return (
        <section className='burger'>
            <div className="burger__container">
                <button className="burger__button-close">
                    <img
                        className="burger__button-close-img"
                        alt="Закрыть"
                        src={BurgerMenuClose}
                         >
                    </img>
                </button>
                <div className="burger__buttons">
                    <Link to="/"
                        className="burger__button-text">
                        Главная
                    </Link>
                    <Link to="/movies"
                        className="burger__button-text">
                        Фильмы
                    </Link>
                    <Link
                        to="/saved-movies"
                        className="burger__button-text">
                        Сохранённые фильмы
                    </Link>
                    <Link to="/"
                        className="burger__button">
                        Аккаунт
                    </Link>
                </div>
                
            </div>
        </section>
    );
}

export default HeaderBurger;