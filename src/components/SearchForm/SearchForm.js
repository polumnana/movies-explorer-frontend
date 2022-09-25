import React from "react";
import Find from '../../images/Find.svg';
import FindButton from '../../images/FindButton.svg';



function SearchForm(props) {

    return (
        <section className="searchform">
            <div className="searchform__container">
                <img className="searchform__img" src={Find} alt="Изображение лупы"></img>
                <input 
                className="searchform__input"
                placeholder="Фильм"
                type="search"
                ></input>
                <button className="searchform__button-find">
                    <img className="searchform__button-find-img" src={FindButton} alt="Кнопка поиск"></img>
                </button>
                <div className="searchform__switch">
                    <input
                    className="searchform__switch-checkbox"
                    type="checkbox"
                    name="switch"
                    id="switch"/>
                    <label for="switch" className="searchform__switch-text">Короткометражки</label>
                </div>

            </div>
        </section>
    )
}

export default SearchForm;