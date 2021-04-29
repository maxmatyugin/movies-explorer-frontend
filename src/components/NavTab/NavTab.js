import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            to="about"
            className="nav__link"
            spy={true}
            smooth={true}
          >
            О проекте
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="techs"
            className="nav__link"
            spy={true}
            smooth={true}
          >
            Технологии
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="about-me"
            className="nav__link"
            spy={true}
            smooth={true}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
