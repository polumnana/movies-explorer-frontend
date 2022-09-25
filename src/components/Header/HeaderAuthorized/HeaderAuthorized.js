import { Link } from 'react-router-dom';



function HeaderAuthorized() {
    return (
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
    );
}

export default HeaderAuthorized;


