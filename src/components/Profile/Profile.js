import "./Profile.css";
import React from "react";
import Popup from "../Popup/Popup";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";

function Profile({
  onLogout,
  isLoggedIn,
  onSubmit,
  submitError,
  isLoading,
  isValid,
  handleChange,
  errors,
  values,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isQuitPopupOpen, setIsQuitPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);
  const history = useHistory();

  const handleQuit = () => {
    setIsQuitPopupOpen(true);
  };

  const onSuccess = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const closeAllPopups = () => {
    setIsQuitPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const enableEditProfile = () => {
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values, setIsEditable, setIsSuccessPopupOpen);
  };

  const errorStatusTransformer = (status) => {
    if (status === 400) {
      return "При обновлении профиля произошла ошибка.";
    }
    if (status === 500) {
      return "На сервере произошла ошибка.";
    }
    if (status === 404) {
      return " Страница по указанному маршруту не найдена.";
    }
  };

  const errorMessage = errorStatusTransformer(submitError);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="profile__form"
        >
          <label className="profile__label">Имя</label>
          <input
            minLength="2"
            maxLength="30"
            required
            type="text"
            name="username"
            id="username"
            className="profile__input"
            placeholder={currentUser.name}
            onChange={handleChange}
            disabled={!isEditable}
            value={values.username}
          ></input>
          <span className="profile__error">{errors.username}</span>
          <label className="profile__label">E-mail</label>
          <input
            required
            type="email"
            id="email"
            className="profile__input"
            name="email"
            placeholder={currentUser.email}
            onChange={handleChange}
            disabled={!isEditable}
            value={values.email}
          ></input>
          <span className="profile__error">{errors.email}</span>
          <span className="submit__error">{errorMessage}</span>
          {isEditable ? (
            <button
              className="profile__button profile__button_type_submit"
              type="submit"
              disabled={!isValid}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
          ) : (
            <>
              <button className="profile__button" onClick={enableEditProfile}>
                Редактировать
              </button>
              <button
                className="profile__button profile__button_color_red"
                onClick={handleQuit}
                type="button"
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>

        <Popup
          isOpen={isQuitPopupOpen}
          onClose={closeAllPopups}
          onSubmit={onLogout}
          title="Вы уверены?"
          buttonName="Да, выйти"
        />
        <Popup
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          onSubmit={onSuccess}
          title="Профиль обновлён!"
          buttonName="Назад"
        />
      </section>
    </>
  );
}

export default Profile;
