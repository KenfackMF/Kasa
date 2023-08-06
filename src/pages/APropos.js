import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Arrow from "../assets/Arrow.png";

function APropos() {
  return (
    <div>
      <Header />
      <div className="image-propos"></div>
      <div className="conteneur-flex">
        <span className="flexi">
          <h3>Flexibilité</h3> <img src={Arrow} alt="arrow" className="arrow" />
        </span>
        <span className="flexi">
          <h3>Respect</h3> <img src={Arrow} alt="arrow" className="arrow" />
        </span>
        <span className="flexi">
          <h3>Service</h3> <img src={Arrow} alt="arrow" className="arrow" />
        </span>
        <span className="flexi">
          <h3>Sécurité</h3> <img src={Arrow} alt="arrow" className="arrow" />
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default APropos;
