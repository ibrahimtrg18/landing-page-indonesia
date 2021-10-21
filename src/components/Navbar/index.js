import { AppBar } from "./styles";
import Vector from "../../assets/icons/Vector.svg";

export default function Navbar() {
  return (
    <AppBar>
      <div className="nav__logo">
        <div className="nav__icon">
          <Vector />
        </div>
        <div className="nav__logo-text">Logo here</div>
      </div>
      <div className="nav__menu">
        <div className="nav__menu-item">Resourceful Indonesia</div>
      </div>
    </AppBar>
  );
}
