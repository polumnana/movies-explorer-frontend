import React from 'react';
import headerLogo from '../images/Logo.svg';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

function Header(props) {

    const location = useLocation().pathname;

    function handleClick() {
        if (location === '/')
            props.logOut();
        else if (location === '/movies')
            props.account();
        else if (location === '/saved-movies')
            props.account();
        else if (location === '/profile')
            props.account();
        else if (location === '/sign-in')
            props.register();
        else if (location === '/sign-up')
            props.logIn();
    }

    function getLinkName() {
        if (location === '/')
            return 'Войти';
        else if (location === '/movies')
            return 'Аккаунт';
        else if (location === '/saved-movies')
            return 'Аккаунт';
        else if (location === '/profile')
            return 'Аккаунт';
    }

    function getStyles() {
        if (location === '/')
            return 'header__signin-link header__signin-link_exit';
        else if (location === '/sign-in')
            return 'header__signin-link';
        else if (location === '/sign-up')
            return 'header__signin-link';
    }

    return (
        <header className="header">
            <img src={headerLogo} alt="Логотип Фильмы" className="header__logo" />
            <div className="header__buttons">
                <button
                    onClick={handleClick}
                    className={getStyles()}>
                    Регистрация
                </button>
                <button
                    onClick={handleClick}
                    className={getStyles()}>
                    {getLinkName()}
                </button>
            </div>
        </header>
    )
}

export default Header;