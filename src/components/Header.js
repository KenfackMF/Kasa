import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
  const location = useLocation();

  return (
    <div className="navigation">
      <img src={logo} alt="Logo kasa" />

      <ul className="pages">
        <NavLink end to="/" className={location.pathname === "/" ? "nav-active" : ""}>
          <li>Acceuil</li>
        </NavLink>

        <NavLink to="/Apropos" className={location.pathname === "/Apropos" ? "nav-active" : ""}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
