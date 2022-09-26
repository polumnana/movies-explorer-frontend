import React from "react";
import Movie from "../Movie/Movie";

function Gallery(props) {
    return (
        <section className="gallery">
            <section className="gallery__elements">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </section>
            <button className="gallery__button">Ещё</button>
        </section>
    );
}

export default Gallery;