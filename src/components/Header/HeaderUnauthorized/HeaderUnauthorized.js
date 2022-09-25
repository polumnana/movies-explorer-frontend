import { Link } from 'react-router-dom';

function HeaderUnauthorized() {
    return (
        <section className="header__unauthorized">
            <Link
                to="sighup"
                className="header__button-register">
                Регистрация
            </Link>
            <Link
                to="/sighin"
                className="header__button-login">
                Войти
            </Link>
        </section>
    );
}

export default HeaderUnauthorized;

