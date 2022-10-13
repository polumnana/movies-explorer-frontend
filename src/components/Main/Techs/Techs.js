import React from "react";

function Techs(props) {
  return (
    <section
      id="techs"
      className="techs">
      <div className="techs__subscription techs__line">
        <h1 className="techs__title">Технологии</h1>
      </div>
      <div className="techs__container">
        <h2 className="techs__subtitle">7 технологий</h2>
        <h3 className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        <article className="techs__items">
          <div className="techs__item">HTML</div>
          <div className="techs__item">CSS</div>
          <div className="techs__item">JS</div>
          <div className="techs__item">React</div>
          <div className="techs__item">Git</div>
          <div className="techs__item">Express.js</div>
          <div className="techs__item">mongoDB</div>
        </article>
      </div>
    </section>
  );
}

export default Techs;