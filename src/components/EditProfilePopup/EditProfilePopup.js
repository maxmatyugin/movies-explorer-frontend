import Popup from '../Popup/Popup';
import './EditProfilePopup.css';

function EditProfilePopup({ isOpen, onClose, onSubmit, nameValue, emailValue, onChange }) {
  return(
<Popup title={'Редактировать профиль'} buttonName={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
<label className="popup__label">Имя</label>
        <input onChange={onChange} value={nameValue} type="text" name="input-name" className="popup__input"></input>
        <span className="popup__error"></span>
        <label className="popup__label">E-mail</label>
        <input onChange={onChange} value={emailValue} type="email" name="input-email" className="popup__input"></input>
        <span className="popup__error"></span>
</Popup>
  )
}

export default EditProfilePopup;