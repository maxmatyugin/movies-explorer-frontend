import "./Profile.css";
import React from "react";
import Popup from "../Popup/Popup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";

function Profile() {
  const [isQuitPopupOpen, setIsQuitPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('email@yandex.ru');

  const handleQuit = () => {
    setIsQuitPopupOpen(true);
  };

  const handleEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsQuitPopupOpen(false);
    setIsEditProfilePopupOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${name}!`}</h2>
      <article className="profile__info">
        <article className="profile__info-item">
          <h3 className="profile__text">Имя</h3>
          <p className="profile__text profile__text_align_right">{name}</p>
        </article>
        <article className="profile__info-item">
          <h3 className="profile__text">E-mail</h3>
          <p className="profile__text profile__text_align_right">
            {email}
          </p>
        </article>
      </article>
      <button className="profile__button" onClick={handleEditProfile}>
        Редактировать
      </button>
      <button
        className="profile__button profile__button_color_red"
        onClick={handleQuit}
      >
        Выйти из аккаунта
      </button>
      <Popup
        isOpen={isQuitPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
        title={"Вы уверены?"}
        buttonName={"Подтвердить"}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
        nameValue={name}
        emailValue={email}
      />
    </section>
  );
}

export default Profile;
