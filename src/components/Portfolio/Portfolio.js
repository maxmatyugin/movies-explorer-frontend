import './Portfolio.css';

function Portfolio() {
  return(
<section className="portfolio">
  <h2 className="portfolio__heading">Портфолио</h2>
  <div className="portfolio__container">
    <a className="portfolio__link">Статичный сайт</a>
    <a className="portfolio__logo"></a>
  </div>
  <div className="portfolio__container">
    <a className="portfolio__link">Адаптивный сайт</a>
    <a className="portfolio__logo"></a>
  </div>
  <div className="portfolio__container">
    <a className="portfolio__link">Одностраничное приложение</a>
    <a className="portfolio__logo"></a>
  </div>
</section>
  );
}

export default Portfolio;