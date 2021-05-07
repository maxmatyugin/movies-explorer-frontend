import "./SearchForm.css";
import React from "react";
import searchIcon from "../../images/search-icon.svg";

function SearchForm({ onSubmit, onChange, searchValue, handleCheck }) {
  return (
    <section className="search-form">
      <form noValidate onSubmit={onSubmit} className="search-form__form">
        <img
          className="search-form__logo"
          alt="Картинка с лупой"
          src={searchIcon}
        ></img>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          name="search"
          value={searchValue || ""}
          required
          onChange={onChange}
        ></input>
        <button className="search-form__submit-button" type="submit"></button>
        <label className="search-form__checkbox-label">
          Короткометражки
          <input
            className="search-form__checkbox"
            type="checkbox"
            onChange={handleCheck}
          ></input>
          <span className="checkbox">
            <span className="checkbox__switch"></span>
          </span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
