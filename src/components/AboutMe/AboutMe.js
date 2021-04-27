import "./AboutMe.css";
import photo from "../../images/Image.jpeg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__article">
          <h3 className="about-me__heading about-me__heading_size_l">Максим</h3>
          <h4 className="about-me__heading about-me__heading_size_s">
            Фронтенд-разработчик, 32 года
          </h4>
          <p className="about-me__text">
            Я родился и живу в Москве. У меня есть жена и сын. Люблю играть на
            бас-гитаре, компьютеры и машины. Серьёзно программировать начал в
            прошлом году на курсах Яндекс.Практикум. Работал по техническим
            специальностям: слесарь-инструментальщик, радиомонтажник. Сейчас ищу
            работу в сфере IT.
          </p>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a href="t.me/maxmatyugin" className="about-me__link">
                Telegram
              </a>
            </li>
            <li className="about-me__list-item">
              <a
                href="https://github.com/maxmatyugin"
                className="about-me__link"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        <img className="about-me__image" alt="Моя фотография" src={photo}></img>
      </div>
    </section>
  );
}

export default AboutMe;
