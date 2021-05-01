import "./SignForm.css";
import React from "react";

import { Link } from "react-router-dom";

function SignForm({
  title,
  children,
  buttonName,
  spanQuestion,
  link,
  spanAnswer,
  onSubmit,
  errorMessage,
  isValid,
}) {

  
  return (
    <section className="sign">
      <form className="sign__form" noValidate onSubmit={onSubmit}>
        <div className="sign__top-wrapper">
          <Link className="sign__logo" to="/"></Link>
          <h2 className="sign__title">{title}</h2>
          {children}
        </div>
        <div className="sign__botton-wrapper">
          <span className="sign__submit-error">{errorMessage}</span>
          <button className="sign__button" type="submit" disabled={!isValid}>
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
