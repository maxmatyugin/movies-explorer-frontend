import Popup from '../Popup/Popup';
import './EditProfilePopup.css';

function EditProfilePopup({ isOpen, onClose, onSubmit, nameValue, emailValue }) {
  return(
<Popup title={'Редактировать профиль'} buttonName={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
<label className="popup__label">Имя</label>
        <input value={nameValue} type="text" className="popup__input"></input>
        <span className="popup__error"></span>
        <label className="popup__label">E-mail</label>
        <input value={emailValue} type="email" className="popup__input"></input>
        <span className="popup__error"></span>
</Popup>
  )
}

export default EditProfilePopup;