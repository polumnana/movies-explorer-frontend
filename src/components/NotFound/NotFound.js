import React from "react";

function NotFound(props) {
    return (
        <article className="notfound">
            <section className="notfound__container">
                <h1 className="notfound__title">404</h1>
                <p className="notfound__text">Страница не найдена</p>
            </section>
            <button className="notfound__button">Назад</button>
        </article>
    );
}

export default NotFound;