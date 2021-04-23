import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  return isLoggedIn ? (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/movies">
            Сохранённые фильмы
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link menu__link_type_profile" to="/profile">
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link menu__link_type_signin" to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
