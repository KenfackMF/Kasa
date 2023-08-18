import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordeon = ({ title, content }) => {
  // State pour gérer la visibilité et la rotation
  const [active, setActive] = useState(false);

  const toggleVisibility = () => {
    setActive(!active);
  };

  return (
    <div className={`accordeon ${active ? "active" : ""}`}>
      <div className="bande-rouge" onClick={toggleVisibility}>
        <h4>{title}</h4>
        <FontAwesomeIcon icon={faChevronUp} className={`arrow ${active ? "rotate" : ""}`} />
      </div>
      {/* Affiche le contenu si l'accordéon est actif */}
      <div className={`container-texte ${active ? "active" : ""}`}>{content}</div>
    </div>
  );
};

export default Accordeon;
