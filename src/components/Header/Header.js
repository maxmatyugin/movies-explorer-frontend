import "./Header.css";
import logo from '../../images/logo.png';

function Header({children}) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип сайта"></img>
      {children}
    </header>
  );
}

export default Header;
