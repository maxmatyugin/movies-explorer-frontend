import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__author">maxmatyugin &copy; {(new Date()).getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link"  >Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link">Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link">Telegram</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;