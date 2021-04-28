import "./Profile.css";
import React from "react";
import Popup from "../Popup/Popup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import Validation from "../../utils/Validation";

function Profile() {
  const { handleChange, handleSubmit, errors, values, currentUser } = Validation();
  const [isQuitPopupOpen, setIsQuitPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

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

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.username}!`}</h2>
      <article className="profile__info">
        <article className="profile__info-item">
          <h3 className="profile__text">Имя</h3>
          <p className="profile__text profile__text_align_right">
            {currentUser.username}
          </p>
        </article>
        <article className="profile__info-item">
          <h3 className="profile__text">E-mail</h3>
          <p className="profile__text profile__text_align_right">
            {currentUser.email}
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
        values={values}
        errors={errors}
        onChange={handleChange}
      />
    </section>
  );
}

export default Profile;
