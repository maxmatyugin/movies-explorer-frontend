import SignForm from "../SignForm/SignForm";
import "./Register.css";
import React from "react";
import Validation from "../../utils/Validation";

function Register({onSubmit, submitError, isLoading}) {
  const { handleChange, errors, values, isValid} = Validation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }
  const errorStatusTransformer = (status) => {
    if(status === 400) {
      return "При регистрации пользователя произошла ошибка."
    }
    if(status === 409) {
      return "Пользователь с таким email уже существует."
    }
    if(status === 500) {
      return "На сервере произошла ошибка."
    }
    if(status === 404) {
      return " Страница по указанному маршруту не найдена."
    }
    
  }

  const errorMessage = errorStatusTransformer(submitError)

  return (
    <>
      <SignForm
        title="Добро пожаловать"
        buttonName="Зарегистрироваться"
        spanQuestion="Уже зарегистрированы?"
        spanAnswer="Войти"
        link="/signin"
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isValid={isValid}
        isLoading={isLoading}
      >
        <label className="sign__label">Имя</label>
        <input
          minLength="2"
          maxLength="30"
          required
          type="text"
          name="username"
          value={values.username || ""}
          className="sign__input"
          onChange={handleChange}
        ></input>
        <span className="sign__error">{errors.username}</span>
        <label className="sign__label">E-mail</label>
        <input
          required
          type="email"
          className="sign__input"
          name="email"
          onChange={handleChange}
          value={values.email}
        ></input>
        <span className="sign__error">{errors.email}</span>
        <label className="sign__label">Пароль</label>
        <input
          required
          minLength="8"
          type="password"
          name="password"
          className="sign__input"
          onChange={handleChange}
          value={values.password}
        ></input>
        <span className="sign__error">{errors.password}</span>
      </SignForm>
    </>
  );
}

export default Register;
