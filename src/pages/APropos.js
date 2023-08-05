import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function APropos() {
  return (
    <div>
      <Header />
      <img className="image-propos" src="../assets/Image_source2.png" alt="source" />
      <span className="flexi">
        <h3>Flexibilité</h3> <img src="../assets/arrow_back_ios-24px 2.png" alt="" />
      </span>
      <span className="flexi">
        <h3>Respect</h3> <img src="../assets/arrow_back_ios-24px 2.png" alt="" />
      </span>
      <span className="flexi">
        <h3>Service</h3> <img src="../assets/arrow_back_ios-24px 2.png" alt="" />
      </span>
      <span className="flexi">
        <h3>Sécurité</h3> <img src="../assets/arrow_back_ios-24px 2.png" alt="" />
      </span>

      <Footer />
    </div>
  );
}

export default APropos;
