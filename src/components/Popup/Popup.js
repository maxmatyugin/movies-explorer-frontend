import "./Popup.css";

function Popup({  isOpen, onClose, onSubmit, title, buttonName }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <form className="popup__container" noValidate onSubmit={onSubmit}>
        <h2 className="popup__title">{title}</h2>
        <button
          type="reset"
          onClick={onClose}
          className="popup__close-button"
        ></button>
        <button type="submit" className="popup__submit-button">
          {buttonName}
        </button>
      </form>
    </div>
  );
}

export default Popup;
