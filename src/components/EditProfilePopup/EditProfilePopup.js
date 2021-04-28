import Popup from '../Popup/Popup';
import './EditProfilePopup.css';

function EditProfilePopup({ isOpen, onClose, onSubmit, values, onChange , errors}) {
  return(
<Popup title={'Редактировать профиль'} buttonName={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
<label className="popup__label">Имя</label>
        <input required minLength="2" maxLength="30" onChange={onChange} value={values.username} type="text" name="username" className="popup__input"></input>
        <span className="popup__error">{errors.username}</span>
        <label className="popup__label">E-mail</label>
        <input onChange={onChange} value={values.email} type="email" name="email" className="popup__input"></input>
        <span required  className="popup__error">{errors.email}</span>
</Popup>
  )
}

export default EditProfilePopup;