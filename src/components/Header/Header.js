import { Link } from 'react-router-dom';
import headerLogo from '../../images/Logo.svg';

function Header({ children }) {
    return (
        <header className="header">
            <div className='header__container'>
                <Link
                    to="/"
                    className='header__logo'>
                    <img
                        src={headerLogo}
                        alt="Логотип Фильмы"
                        className="header__logo-img" />
                </Link>
                {children}
            </div>
        </header>
    );
}

export default Header;