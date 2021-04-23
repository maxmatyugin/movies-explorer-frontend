import './Techs.css';

function Techs() {
  return(
<section className="techs">
  <h2 className="techs__heading">Технологии</h2>
  <article className="techs__article">
    <h3 className="article__heading article__heading_place_techs">7 технологий</h3>
    <p className="article__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
  </article>
  <div className="techs__chart">
    <div className="techs__chart-item">HTML</div>
    <div className="techs__chart-item">CSS</div>
    <div className="techs__chart-item">JS</div>
    <div className="techs__chart-item">React</div>
    <div className="techs__chart-item">Git</div>
    <div className="techs__chart-item">Express.js</div>
    <div className="techs__chart-item">MongoDB</div>
  </div>
</section>
  );
}

export default Techs;