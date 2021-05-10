import "./Header.css";
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedIn}) {
  return (
    <header className="header">
      <Link className="logo" to='/'></Link>
      <Navigation isLoggedIn={isLoggedIn}/>
    </header>
  );
}

export default Header;
