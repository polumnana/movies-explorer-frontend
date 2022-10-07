import React from "react";
import Find from '../../images/Find.svg';
import FindButton from '../../images/FindButton.svg';

function SearchForm(props) {
  const [searchText, setSearchText] = React.useState('');
  const [checkboxState, setCheckboxState] = React.useState(false);

  function changeSearchForm(evt) {
    setSearchText(evt.target.value);
  }

  function changeCheckboxState() {
    setCheckboxState(!checkboxState);
  }

  function searchMovies() {
    props.onSearch(searchText, checkboxState);
  }

  return (
    <section className="searchform">
      <div className="searchform__container">
        <img className="searchform__img" src={Find} alt="Поиск"></img>
        <input
          className="searchform__input"
          placeholder="Фильм"
          type="search"
          onChange={changeSearchForm}
          required
        ></input>
        <button
          className="searchform__button-find"
          type="button"
          onClick={searchMovies}>
          <img className="searchform__button-find-img" src={FindButton} alt="Кнопка поиск"></img>
        </button>
        <div className="searchform__switch">
          <input
            className="searchform__switch-checkbox"
            type="checkbox"
            name="switch"
            id="switch"
            onClick={changeCheckboxState}
          />
          <label htmlFor="switch" className="searchform__switch-text">Короткометражки</label>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;