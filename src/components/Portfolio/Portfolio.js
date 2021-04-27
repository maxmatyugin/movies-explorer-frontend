import './Portfolio.css';

function Portfolio() {
  return(
<section className="portfolio">
  <h2 className="portfolio__heading">Портфолио</h2>
  <div className="portfolio__container">
    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://maxmatyugin.github.io/how-to-learn/">Статичный сайт</a>
    <div className="portfolio__logo"></div>
  </div>
  <div className="portfolio__container">
    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://maxmatyugin.github.io/russian-travel/">Адаптивный сайт</a>
    <div className="portfolio__logo" ></div>
  </div>
  <div className="portfolio__container">
    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://front.maxmatyugin.nomoredomains.club/sign-in">Одностраничное приложение</a>
    <div className="portfolio__logo" ></div>
  </div>
</section>
  );
}

export default Portfolio;