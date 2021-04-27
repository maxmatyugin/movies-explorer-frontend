import SignForm from "../SignForm/SignForm";
import "./Login.css";

function Login() {
  return (
    <>
      <SignForm
        title="Рады видеть"
        buttonName="Войти"
        spanQuestion="Ещё не зарегистрированы?"
        spanAnswer="Регистрация"
        link="/signup"
      ></SignForm>
    </>
  );
}

export default Login;
