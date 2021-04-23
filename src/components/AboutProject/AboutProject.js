import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__heading">О проекте</h2>
      <div className="about__article-wrapper">
        <article className="about__article">
          <h3 className="article__heading article__heading_place_about">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="article__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about__article">
          <h3 className="article__heading article__heading_place_about">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="article__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>

      <div className="about__chart">
        <div className="about__chart-item about__chart-item_green">
          1 неделя
        </div>
        <div className="about__chart-item about__chart-item_gray">4 недели</div>
        <div className="about__chart-item about__chart-item_transparent">
          Back-end
        </div>
        <div className="about__chart-item about__chart-item_transparent">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
