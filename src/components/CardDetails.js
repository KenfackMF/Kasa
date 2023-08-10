import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { ListeChambre } from "../data/ListeChambres";
import Carousel from "./Carroussel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CardDetails() {
  const [activeDescription, setActiveDescription] = useState(false);
  const [activeEquipement, setActiveEquipement] = useState(false);

  const { id } = useParams();
  const chambre = ListeChambre.find((chambre) => chambre.id === id);

  if (!chambre) {
    return <div>Chambre non trouvée</div>;
  }

  const toggleDescriptionVisibility = () => {
    setActiveDescription(!activeDescription);
    setActiveEquipement(false); // Fermer le panneau d'équipement si ouvert
  };

  const toggleEquipementVisibility = () => {
    setActiveEquipement(!activeEquipement);
    setActiveDescription(false); // Fermer le panneau de description si ouvert
  };

  return (
    <div>
      <Header />
      <div className="card-details">
        <Carousel images={chambre.pictures} />
        <div className="block-haut">
          <div className="sur-titre">
            <h3 className="titre">{chambre.title}</h3>
            <p className="location"> {chambre.location}</p>
          </div>
          <div className="block-host">
            <p className="host"> {chambre.host.name}</p>
            <div className="rond" style={{ backgroundImage: `url(${chambre.host.picture})` }}>
              {" "}
            </div>
          </div>
        </div>

        <div className="block-milieu">
          <div className="tag-container">
            {chambre.tags.map((tag, index) => (
              <div key={index} className="tag-item">
                {tag}
              </div>
            ))}
          </div>

          <p className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className={index < chambre.rating ? "etoile-colore" : "etoile-grise"} />
            ))}
          </p>
        </div>

        <div className="block-bas">
          <div className="container-descrition">
            <div className={`description ${activeDescription ? "active" : ""}`} onClick={toggleDescriptionVisibility}>
              <h4>Description </h4> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeDescription ? "rotate" : ""}`} />
            </div>
            {activeDescription && (
              <div className="description-texte">
                <p>{chambre.description}</p>
              </div>
            )}
          </div>

          <div className="container-equi">
            <div className={`equipement ${activeEquipement ? "active" : ""}`} onClick={toggleEquipementVisibility}>
              <h4>Equipement</h4> <FontAwesomeIcon icon={faChevronUp} className={`arrow ${activeEquipement ? "rotate" : ""}`} />
              {activeEquipement && (
                <div className="description-equi">
                  <div className="equipement-list">
                    {chambre.equipments.map((equipment, index) => (
                      <p key={index}>{equipment}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
