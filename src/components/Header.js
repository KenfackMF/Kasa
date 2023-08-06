import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo kasa" />

      <ul className="navigation-li">
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>

        <NavLink to="/Apropos">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
