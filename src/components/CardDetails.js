import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { ListeChambre } from "../data/ListeChambres";
import Carousel from "./Carroussel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Erreur404 from "../pages/Erreur404";
import Accordeon from "./Accordeon";

function CardDetails() {
  const { id } = useParams();
  const chambre = ListeChambre.find((chambre) => chambre.id === id);

  if (!chambre) {
    return <Erreur404 />;
  }

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
          <div className="container-description">
            <Accordeon title="Description" content={<p>{chambre.description}</p>} />
          </div>

          <div className="container-equipement">
            <Accordeon
              title="Equipements"
              content={
                <ul className="description-texte">
                  {chambre.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
