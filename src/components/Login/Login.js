import SignForm from "../SignForm/SignForm";
import "./Login.css";
import Validation from "../../utils/Validation";

function Login({onSubmit, submitError, isLoading}) {
  const { handleChange, errors, values, isValid} = Validation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }
  const errorStatusTransformer = (status) => {
    if(status === 400) {
      return "Вы ввели неправильный логин или пароль."
    }
    if(status === 401) {
      return "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
    }
    if(status === 500) {
      return "На сервере произошла ошибка."
    }
    if(status === 404) {
      return " Страница по указанному маршруту не найдена."
    }
    if(status === 429) {
      return "Слишком много запросов."
    }
  }

  const errorMessage = errorStatusTransformer(submitError)

  return (
    <>
      <SignForm
        title="Рады видеть"
        buttonName="Войти"
        spanQuestion="Ещё не зарегистрированы?"
        spanAnswer="Регистрация"
        link="/signup"
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isValid={isValid}
        isLoading={isLoading}
      >
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

export default Login;
