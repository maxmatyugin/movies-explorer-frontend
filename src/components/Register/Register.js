import SignForm from "../SignForm/SignForm";
import "./Register.css";

function Register() {
  return(
    <SignForm
    title="Добро пожаловать"
        buttonName="Зарегистрироваться"
        spanQuestion="Уже зарегистрированы?"
        spanAnswer="Войти"
        link="/signin"
    >
<label className="sign__label">Имя</label>
        <input type="text" className="sign__input"></input>
        <span className="sign__error"></span>
    </SignForm>
  )
}

export default Register;