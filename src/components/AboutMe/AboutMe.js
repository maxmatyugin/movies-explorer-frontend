import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <article className="about-me__article">
        <h3 className="article__heading article__heading_big">Максим</h3>
        <h4 className="article__heading article__heading_small">
          Фронтенд-разработчик, 32 года
        </h4>
        <p className="article__text">
          Я родился и живу в Москве. У меня есть жена и сын. Люблю играть на
          бас-гитаре, компьютеры и машины. Серьёзно программировать начал в прошлом году
          на курсах Яндекс.Практикум. Работал по техническим специальностям:
          слесарь-инструментальщик, радиомонтажник. Сейчас
          ищу работу в сфере IT.
        </p>
        <ul className="article__list">
          <li className="article__list-item">
            <a href="#" className="article__link">Telegram</a>
          </li>
          <li className="article__list-item">
            <a href="#" className="article__link">Github</a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
