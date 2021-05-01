import "./Profile.css";
import React from "react";
import Popup from "../Popup/Popup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isQuitPopupOpen, setIsQuitPopupOpen] = React.useState(false);

  const handleQuit = () => {
    setIsQuitPopupOpen(true);
  };

  const handleClose = () => {
    setIsQuitPopupOpen(false);
  };

 

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <article className="profile__info">
        <article className="profile__info-item">
          <h3 className="profile__text">Имя</h3>
          <p className="profile__text profile__text_align_right">
            {currentUser.name}
          </p>
        </article>
        <article className="profile__info-item">
          <h3 className="profile__text">E-mail</h3>
          <p className="profile__text profile__text_align_right">
            {currentUser.email}
          </p>
        </article>
      </article>
      <button className="profile__button" >
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
        onClose={handleClose}
        onSubmit={onLogout}
      />
     
    </section>
  );
}

export default Profile;
