import "./Burger.css";

function Burger({isBurgerOpen, onClick}) {
  return (
    <div
      className={`burger ${isBurgerOpen ? "burger_opened" : ""}`}
      onClick={onClick}
    >
      <span className="burger__middle-line"></span>
    </div>
  );
}

export default Burger;
