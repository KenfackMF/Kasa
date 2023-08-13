import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Accordeon from "../components/Accordeon.js";

function APropos() {
  return (
    <div>
      <Header />
      <div className="image-propos"></div>
      <div className="conteneur-flex">
        <Accordeon
          title="Flexibilité"
          content={
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrements vérifiées pas nos équipes.</p>
          }
        />
        <Accordeon
          title="Respect"
          content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>}
        />
        <Accordeon
          title="Services"
          content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>}
        />
        <Accordeon
          title="Sécutité"
          content={
            <p>
              {" "}
              La Sécurité est la priorité de Kasa. aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note
              aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons égalament des ateliers sur la sécurité dommestique pour
              nos hôtes.
            </p>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default APropos;
