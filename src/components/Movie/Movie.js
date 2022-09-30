import React from "react";
import Poster from "../../images/Poster.svg";

function Movie(props) {
    return (
        <section className="movie">
            <h1 className="movie__title">33 слова о дизайне</h1>
            <p className="movie__duration">{`1ч 47м`}</p>
            <button className="movie__button" >
                <img className="movie__button-img" alt={props.imgAlt} src={props.imgButton}></img>
            </button>
            <img className="movie__poster" alt="Постер фильма" src={Poster}></img>
        </section>
    );
}

export default Movie;