import React from "react";

function Promo(props) {
    return (
        <article className="promo">
            <section className="promo__container">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.</h1>
                <div className="promo__items">
                    <div className="promo__item">О проекте</div>
                    <div className="promo__item">Технологии</div>
                    <div className="promo__item">Студент</div>
                </div>
            </section>

        </article >
    );
}

export default Promo;