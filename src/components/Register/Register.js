import "./Register.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="sign">
      <form className="sign__form">
      <img className="sign__logo" alt="Логотип" src={logo}></img>
      <h2 className="sign__title">Добро пожаловать!</h2>
        <label className="sign__label">Имя</label>
        <input type="text" className="sign__input"></input>
        <span className="sign__error"></span>
        <label className="sign__label">E-mail</label>
        <input type="email" className="sign__input"></input>
        <span className="sign__error"></span>
        <label className="sign__label">Пароль</label>
        <input type="password" className="sign__input"></input>
        <span className="sign__error"></span>
        <button className="sign__button" type="submit">Зарегистрироваться</button>
        <div className="sign__link-wrapper">
          <span className="sign__span">Уже зарегистрированы?</span>
          <Link to='/signin' className="sign__link">Войти</Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
