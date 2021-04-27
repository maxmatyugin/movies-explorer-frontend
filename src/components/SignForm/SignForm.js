import "./SignForm.css";

import { Link } from "react-router-dom";

function SignForm({
  title,
  children,
  buttonName,
  spanQuestion,
  link,
  spanAnswer,
}) {
  return (
    <section className="sign">
      <form className="sign__form">
        <div className="sign__top-wrapper">
          <Link className="sign__logo" to="/"></Link>
          <h2 className="sign__title">{title}</h2>
          {children}
          <label className="sign__label">E-mail</label>
          <input type="email" className="sign__input"></input>
          <span className="sign__error"></span>
          <label className="sign__label">Пароль</label>
          <input type="password" className="sign__input"></input>
          <span className="sign__error"></span>
        </div>
        <div className="sign__bottom-wrapper">
          <button className="sign__button" type="submit">
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
