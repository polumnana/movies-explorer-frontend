import React from "react";
import Link from "../../../images/Link.svg";

function Portfolio(props) {
    return (
        <article className="portfolio">
            <div className="portfolio__container">
                <h1 className="portfolio__title">Портфолио</h1>
                <section className="portfolio__links">
                    <div className="portfolio__link portfolio__line">
                        <h2 className="portfolio__text">Статичный сайт</h2>
                        <button className="portfolio__button" type="button">
                            <a rel="noreferrer" target="_blank" href="https://github.com/polumnana/how-to-learn">
                                <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                            </a>
                        </button>
                    </div>
                    <div className="portfolio__link portfolio__line">
                        <h2 className="portfolio__text">Адаптивный сайт</h2>
                        <button className="portfolio__button" type="button">
                            <a rel="noreferrer" target="_blank" href="https://github.com/polumnana/russian-travel">
                                <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                            </a>
                        </button>
                    </div>
                    <div className="portfolio__link">
                        <h2 className="portfolio__text">Одностраничное приложение</h2>
                        <button className="portfolio__button" type="button">
                            <a rel="noreferrer" target="_blank" href="https://github.com/polumnana/react-mesto-api-full">
                                <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                            </a>
                        </button>
                    </div>
                </section>
            </div>

        </article >
    );
}

export default Portfolio;