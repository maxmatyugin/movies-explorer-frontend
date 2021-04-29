import SignForm from "../SignForm/SignForm";
import "./Register.css";
import React from "react";
import Validation from '../../utils/Validation';

function Register() {
  const { handleChange, errors, values } = Validation();

  return (
    <>
    <SignForm
      title="Добро пожаловать"
      buttonName="Зарегистрироваться"
      spanQuestion="Уже зарегистрированы?"
      spanAnswer="Войти"
      link="/signin"
      Validation={Validation}
    >
      <label className="sign__label">Имя</label>
      <input
        minLength="2"
        maxLength="30"
        required
        type="text"
        name="username"
        value={values.username}
        className="sign__input"
        onChange={handleChange}
      ></input>
      <span className="sign__error">{errors.username}</span>
    </SignForm>
      </>
  );
}

export default Register;
