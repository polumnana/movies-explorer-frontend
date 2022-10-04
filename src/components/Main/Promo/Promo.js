import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function Promo(props) {
    return (
        <section className="promo">
            <article className="promo__container">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.</h1>
                <div className="promo__items">
                    <Link to="#about-project" className="promo__item">О проекте</Link>
                    <Link to="#techs" className="promo__item">Технологии</Link>
                    <Link to="#about-me" className="promo__item">Студент</Link>
                </div>
            </article>

        </section >
    );
}

export default Promo;