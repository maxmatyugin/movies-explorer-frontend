import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, username!</h2>
      <article className="profile__info">
        <article className="profile__info-item">
          <h3 className="profile__text">Имя</h3>
          <p className="profile__text profile__text_align_right">username</p>
        </article>
        <article className="profile__info-item">
          <h3 className="profile__text">E-mail</h3>
          <p className="profile__text profile__text_align_right">username@yandex.ru</p>
        </article>
      </article>
      <Link className="profile__link" to="">Редактировать</Link>
      <Link className="profile__link profile__link_color_red" to="">Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
