import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMenu from '../../../images/BurgerMenu.svg';
import HeaderBurger from '../HeaderBurger/HeaderBurger';

function HeaderAuthorized() {

    const [classesListBurger, setClassesListBurger] = React.useState('');

    function handleOpenBurger() {
        setClassesListBurger("burger burger_opened");
    }

    function handleCloseBurger() {
        setClassesListBurger("burger");
    }

    return (
        <>
            <section className="header__burger">
                <button
                    className="header__button-menu"
                    onClick={handleOpenBurger}
                    type="button"
                >
                    <img className='header__img' alt="Меню" src={ButtonMenu}></img>
                    <span className="header__burger-layer"></span>
                </button>
                <HeaderBurger
                    classList={classesListBurger}
                    onClose={handleCloseBurger} />
            </section>

            <section className="header__authorized">
                <div className='header__films'>
                    <Link to="/movies"
                        className="header__button-films header__button-films-text header__button-films-text_selected">
                        Фильмы
                    </Link>
                    <Link
                        to="/saved-movies"
                        className="header__button-saved-films header__button-films-text header__button-films-text_selected">
                        Сохранённые фильмы
                    </Link>
                </div>

                <Link to="/profile"
                    className="header__button-account">
                    Аккаунт
                </Link>
            </section>
        </>
    );
}

export default HeaderAuthorized;


