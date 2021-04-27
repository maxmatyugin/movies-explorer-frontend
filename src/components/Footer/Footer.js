import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__author">maxmatyugin &copy; {(new Date()).getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" >Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://github.com/maxmatyugin/" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="http://t.me/maxmatyugin" target="_blank" rel="noreferrer">Telegram</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;