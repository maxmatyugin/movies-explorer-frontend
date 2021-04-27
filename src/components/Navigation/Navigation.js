import "./Navigation.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";

function Navigation({ isLoggedIn }) {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  React.useEffect(() => {
    const body = document.querySelector(".body");
    isBurgerOpen
      ? body.classList.add("body_locked")
      : body.classList.remove("body_locked");
  }, [isBurgerOpen]);

  const handleBurgerClick = () => {
    isBurgerOpen ? setIsBurgerOpen(false) : setIsBurgerOpen(true);
  };

  return isLoggedIn ? (
    <>
      <Burger onClick={handleBurgerClick} isBurgerOpen={isBurgerOpen} />
      <nav className={`menu ${isBurgerOpen ? "menu_opened" : ""}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink className="menu__link menu__link_main" to="/">
              Главная
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__link"
              activeClassName="menu__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__link"
              activeClassName="menu__link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <Link className="menu__profile-link" to="/profile">
              Аккаунт
            </Link>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <>
      <Burger onClick={handleBurgerClick} isBurgerOpen={isBurgerOpen} />
      <nav className={`menu ${isBurgerOpen ? "menu_opened" : ""}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/signup">
              Регистрация
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__sign-in-link" to="/signin">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
