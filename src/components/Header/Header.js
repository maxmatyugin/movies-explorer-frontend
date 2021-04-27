import "./Header.css";
import {Link} from 'react-router-dom';

function Header({children}) {
  return (
    <header className="header">
      <Link className="logo" to='/'></Link>
      {children}
    </header>
  );
}

export default Header;
