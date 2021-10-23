import React, { useState, useEffect } from "react";
import { AppBar } from "./styles";
import Vector from "../../assets/icons/Vector.svg";

export default function Navbar() {
  const [positionScroll, setPositionScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", onListenScroll);
    return () => document.removeEventListener("scroll", onListenScroll);
  }, []);

  const onListenScroll = () => {
    setPositionScroll(window.pageYOffset);
  };

  return (
    <AppBar transparent={positionScroll === 0}>
      <div className="nav__logo">
        <Vector />
        <div className="nav__logo-text">Logo here</div>
      </div>
      <div className="nav__menu">
        <div className="nav__menu-item">Resourceful Indonesia</div>
      </div>
    </AppBar>
  );
}
