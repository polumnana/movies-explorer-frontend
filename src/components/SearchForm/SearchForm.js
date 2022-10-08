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
    const newValue = !checkboxState;
    setCheckboxState(newValue);

    props.onSetCheckbox(newValue);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSearch(searchText, checkboxState);
  }

  React.useEffect(() => {
    setSearchText(props.searchText);
    setCheckboxState(props.checkboxState);
  }, [props.checkboxState, props.searchText]);

  return (
    <section className="searchform">
      <form
        className="searchform__container"
        onSubmit={handleSubmit}>
        <img className="searchform__img" src={Find} alt="Поиск"></img>
        <input
          className="searchform__input"
          placeholder="Фильм"
          type="search"
          onChange={changeSearchForm}
          value={searchText}
        />
        <button
          className="searchform__button-find"
          type="submit">
          <img className="searchform__button-find-img" src={FindButton} alt="Кнопка поиск"></img>
        </button>
        <div className="searchform__switch">
          <input
            className="searchform__switch-checkbox"
            type="checkbox"
            name="switch"
            id="switch"
            onClick={changeCheckboxState}
            checked={checkboxState}
          />
          <label htmlFor="switch" className="searchform__switch-text">Короткометражки</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;