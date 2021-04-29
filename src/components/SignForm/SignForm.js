import "./SignForm.css";
import React from "react";
import Validation from "../../utils/Validation";

import { Link } from "react-router-dom";

function SignForm({
  title,
  children,
  buttonName,
  spanQuestion,
  link,
  spanAnswer,
}) {
  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    submitError,
    isSubmitButtonDisabled,
  } = Validation();

  return (
    <section className="sign">
      <form className="sign__form" noValidate onSubmit={handleSubmit}>
        <div className="sign__top-wrapper">
          <Link className="sign__logo" to="/"></Link>
          <h2 className="sign__title">{title}</h2>
          {children}
          <label className="sign__label">E-mail</label>
          <input
            required
            type="email"
            className="sign__input"
            name="email"
            onChange={handleChange}
            value={values.email}
          ></input>
          <span className="sign__error">{errors.email}</span>
          <label className="sign__label">Пароль</label>
          <input
            required
            minLength="8"
            type="password"
            name="password"
            className="sign__input"
            onChange={handleChange}
            value={values.password}
          ></input>
          <span className="sign__error">{errors.password}</span>
        </div>
        <div className="sign__botton-wrapper">
          <span className="sign__submit-error">{submitError}</span>
          <button
            disabled={isSubmitButtonDisabled}
            className="sign__button"
            type="submit"
          >
            {buttonName}
          </button>
          <div className="sign__link-wrapper">
            <span className="sign__span">{spanQuestion}</span>
            <Link to={link} className="sign__link">
              {spanAnswer}
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignForm;
