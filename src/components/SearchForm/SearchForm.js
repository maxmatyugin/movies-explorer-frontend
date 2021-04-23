import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <img
          className="search-form__logo"
          alt="Картинка с лупой"
          src={searchIcon}
        ></img>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
        ></input>
        <button className="search-form__submit-button" type="submit"></button>
        <label className="search-form__checkbox-label">Короткометражки
          <input className="search-form__checkbox" type="checkbox"></input>
            <span className="checkbox">
              <span className="checkbox__switch"></span>
            </span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
