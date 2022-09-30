import { Link } from 'react-router-dom';
import ButtonMenu from '../../../images/BurgerMenu.svg';



function HeaderAuthorized() {
    return (
        <>
            <section class="header__burger">
                <button class="header__button-menu">
                    <img className='header__img' alt="Меню" src={ButtonMenu}></img>
                    <span class="header__burger-layer"></span>
                </button>
            </section>

            <section className="header__authorized">
                <div className='header__films'>
                    <Link to="/movies"
                        className="header__button-films header__button-films-text header__button-films-text_selected">
                        Фильмы
                    </Link>
                    <Link
                        to="saved-movies"
                        className="header__button-saved-films header__button-films-text header__button-films-text_selected">
                        Сохранённые фильмы
                    </Link>
                </div>

                <Link to="/"
                    className="header__button-account">
                    Аккаунт
                </Link>
            </section>
        </>
    );
}

export default HeaderAuthorized;


