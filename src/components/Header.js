import React from "react";
import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo kasa" />

      <nav>
        <ul>
          <li>Acceuil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
