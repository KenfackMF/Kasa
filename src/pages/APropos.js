import React, { useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function APropos() {
  const [activeParagraph, setActiveParagraph] = useState(null);

  const toggleParagraphVisibility = (index) => {
    if (activeParagraph === index) {
      setActiveParagraph(null); // Ferme le paragraphe s'il est déjà ouvert
    } else {
      setActiveParagraph(index); // Ouvre le paragraphe cliqué
    }
  };

  return (
    <div>
      <Header />
      <div className="image-propos"></div>
      <div className="conteneur-flex">
        <span className={`flexi ${activeParagraph === 0 ? "active" : ""}`} onClick={() => toggleParagraphVisibility(0)}>
          <h3>Flexibilité</h3> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeParagraph === 0 ? "rotate" : ""}`} />
        </span>
        {activeParagraph === 0 && (
          <div className="paragraph-content">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrements vérifiées pas nos équipes.</p>
          </div>
        )}

        <span className={`flexi ${activeParagraph === 1 ? "active" : ""}`} onClick={() => toggleParagraphVisibility(1)}>
          <h3>Respect</h3> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeParagraph === 1 ? "rotate" : ""}`} />
        </span>
        {activeParagraph === 1 && (
          <div className="paragraph-content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>
          </div>
        )}

        <span className={`flexi ${activeParagraph === 2 ? "active" : ""}`} onClick={() => toggleParagraphVisibility(2)}>
          <h3>Service</h3> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeParagraph === 2 ? "rotate" : ""}`} />
        </span>
        {activeParagraph === 2 && (
          <div className="paragraph-content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>
          </div>
        )}

        <span className={`flexi ${activeParagraph === 3 ? "active" : ""}`} onClick={() => toggleParagraphVisibility(3)}>
          <h3>Sécurité</h3> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeParagraph === 3 ? "rotate" : ""}`} />
        </span>
        {activeParagraph === 3 && (
          <div className="paragraph-content">
            <p>
              La Sécurité est la priorité de Kasa. aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note
              aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons égalament des ateliers sur la sécurité dommestique pour
              nos hôtes.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default APropos;
