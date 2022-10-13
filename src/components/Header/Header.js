import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/Logo.svg';

import { CurrentUserContext } from '../Contexts/CurrentUserContext.js';
import HeaderAuthorized from './HeaderAuthorized/HeaderAuthorized';
import HeaderUnauthorized from './HeaderUnauthorized/HeaderUnauthorized';

function Header(props) {
  const location = useLocation().pathname;
  const currentUser = React.useContext(CurrentUserContext); // получаем значения из контекста
  const showHeader = location === '/' || location === '/profile' || location === '/movies' || location === '/saved-movies';

  function getHeader() {
    if (currentUser.name)
      return <HeaderAuthorized />;
    else
      return <HeaderUnauthorized />;
  }

  return (
    <>
      {showHeader &&
        <header className="header">
          <div className='header__container'>
            <Link
              to='/'
              className='header__logo'>
              <img
                src={headerLogo}
                alt="Логотип Фильмы"
                className="header__logo-img" />
            </Link>
            {getHeader()}
          </div>
        </header>
      }
    </>

  );
}

export default Header;