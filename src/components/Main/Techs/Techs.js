import React from "react";

function Techs(props) {
    return (
        <article className="techs">
            <div className="techs__subscription techs__line">
                <h1 className="techs__title">Технологии</h1>
            </div>
            <div className="techs__container">
                <h2 className="techs__subtitle">7 технологий</h2>
                <h3 className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
                <section className="techs__items">
                    <div className="techs__item">HTML</div>
                    <div className="techs__item">CSS</div>
                    <div className="techs__item">JS</div>
                    <div className="techs__item">React</div>
                    <div className="techs__item">Git</div>
                    <div className="techs__item">Express.js</div>
                    <div className="techs__item">mongoDB</div>
                </section>
            </div>
        </article>
    );
}

export default Techs;