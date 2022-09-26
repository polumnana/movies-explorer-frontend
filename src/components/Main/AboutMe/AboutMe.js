import React from "react";
import userPhoto from '../../../images/userPhoto.jpg';


function AboutMe(props) {
    return (
        <article
            id="about-me"
            className="about-me">
            <div className="about-me__subscription about-me__line">
                <h1 className="about-me__title">Студент</h1>
            </div>
            <div className="about-me__container">
                <section className="about-me__description">
                    <h2 className="about-me__name">Елена</h2>
                    <h3 className="about-me__about">Начинающий фронтенд-разработчик, 24 года</h3>
                    <p className="about-me__text">
                        После переезда в другую страну у меня появилось время,
                        чтобы изучить что-то новое.
                        Мой выбор пал на фронтенд-разработку!
                        Мне нравится видеть, как набор строчек кода может оживить страничку или
                        помочь пользователю заполнить форму.
                        Помимо разработки я играю на пианино и занимаюсь скалолазанием.
                    </p>

                    <div className="about-me__links">
                        <a className="about-me__link" href="github.com/polumnana">Github</a>
                        <a className="about-me__link" href="https://www.facebook.com/">Facebook</a>
                    </div>
                </section>
                <section className="about-me__photo">
                    <img className="about-me__img" src={userPhoto} alt="Фото пользователя"></img>
                </section>
            </div>
        </article>
    );
}

export default AboutMe;