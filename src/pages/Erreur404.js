import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/Error.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Erreur404() {
  return (
    <div>
      <Header />
      <div className="conteneur-erreur">
        <img src={Error} alt="erreur-404" className="erreur-404" />
        <p className="texte1">Oups ! La page que vous cherche est introuvable</p>

        <p className="texte2">
          <Link to="/" className="lien-acceuil">
            Retourner sur la page d'acceuil{" "}
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur404;
