import "./Login.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="sign">
      <form className="sign__form">
      <img className="sign__logo" alt="Логотип" src={logo}></img>
      <h2 className="sign__title">Рады видеть!</h2>
        
        <label className="sign__label">E-mail</label>
        <input type="email" className="sign__input"></input>
        <span className="sign__error"></span>
        <label className="sign__label">Пароль</label>
        <input type="password" className="sign__input"></input>
        <span className="sign__error"></span>
        <button className="sign__button" type="submit">Войти</button>
        <div className="sign__link-wrapper">
          <span className="sign__span">Ещё не зарегистрированы?</span>
          <Link to='/signup' className="sign__link">Регистрация</Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
