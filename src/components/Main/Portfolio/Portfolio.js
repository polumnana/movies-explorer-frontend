import React from "react";
import Link from "../../../images/Link.svg";

function Portfolio(props) {
    return (
        <section className="portfolio">
            <article className="portfolio__container">
                <h1 className="portfolio__title">Портфолио</h1>

                <ul className="portfolio__items">
                    <li className="portfolio__item portfolio__line">
                        <a
                            className="portfolio__link"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/polumnana/how-to-learn">Статичный сайт
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </a>
                    </li>
                    <li className="portfolio__item portfolio__line">
                        <a
                            className="portfolio__link"
                            rel="noreferrer"
                            target="_blank"
                            href="https://polumnana.github.io/russian-travel/">Адаптивный сайт
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </a>
                    </li>
                    <li className="portfolio__item portfolio__line">
                        <a
                            className="portfolio__link"
                            rel="noreferrer"
                            target="_blank"
                            href="https://polumnana.frontend.nomoredomains.sbs/">Одностраничное приложение
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </a>
                    </li>
                </ul>
            </article>

        </section >
    );
}

export default Portfolio;