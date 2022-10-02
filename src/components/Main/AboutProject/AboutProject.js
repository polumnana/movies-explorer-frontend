import React from "react";

function AboutProject(props) {
    return (
        <section
            id="about-project"
            className="about-project" >
            <div className="about-project__subscription about-project__line">
                <h1 className="about-project__title">О проекте</h1>
            </div>
            <article className="about-project__container">
                <div className="about-project__description">
                    <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности
                        и финальные доработки.</p>
                </div>
                <div className="about-project__description">
                    <h2 className="about-project__subtitle">
                        На выполнение диплома ушло 5 недель</h2>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
            <article className="about-project__progress">
                <div className="about-project__bar about-project_backend">
                    <h2 className="about-project__time">1 неделя</h2>
                    <p className="about-project__text-block">Backend</p>
                </div>
                <div className="about-project__bar about-project_frontend">
                    <h2 className="about-project__time">4 недели</h2>
                    <p className="about-project__text-block">Frontend</p>
                </div>
            </article>
        </section >
    );
}

export default AboutProject;