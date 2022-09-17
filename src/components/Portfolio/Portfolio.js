import React from "react";
import Link from "../../images/Link.svg";

function Portfolio(props) {
    return (
        <article className="portfolio">
            <div className="portfolio__container">
                <h1 className="portfolio__title">Портфолио</h1>
                <section className="portfolio__links">
                    <div className="portfolio__link portfolio__line">
                        <h2 className="portfolio__text">Статичный сайт</h2>
                        <button className="portfolio__button">
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </button>
                    </div>
                    <div className="portfolio__link portfolio__line">
                        <h2 className="portfolio__text">Адаптивный сайт</h2>
                        <button className="portfolio__button">
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </button>
                    </div>
                    <div className="portfolio__link">
                        <h2 className="portfolio__text">Одностраничное приложение</h2>
                        <button className="portfolio__button">
                            <img className="portfolio__img" src={Link} alt="Ссылка на страницу"></img>
                        </button>
                    </div>
                </section>
            </div>

        </article >
    );
}

export default Portfolio;