import React from "react";
import Movie from "../Movie/Movie";

function Gallery(props) {
    return (
        <section className="gallery" ImgButton={props.ImgButton}>
            <section className="gallery__elements">
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
                <Movie ImgButton={props.ImgButton} />
            </section>
            <button className="gallery__button" type="button">Ещё</button>
        </section>
    );
}

export default Gallery;