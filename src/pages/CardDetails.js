import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carroussel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Erreur404 from "./Erreur404";
import Accordeon from "../components/Accordeon";

function CardDetails() {
  const { id } = useParams();
  const [chambre, setChambre] = useState(null);

  useEffect(() => {
    fetch("/ListeChambres.json")
      .then((response) => response.json())
      .then((data) => {
        const foundChambre = data.find((chambre) => chambre.id === id);
        setChambre(foundChambre);
      })
      .catch((error) => console.error("Erreur lors du chargement du fichier JSON", error));
  }, [id]);

  if (!chambre) {
    return <Erreur404 />;
  }

  return (
    <div>
      <Header />
      <div className="card-details">
        <Carousel images={chambre.pictures} />

        <div className="block-haut">
          <div className="block-gauche">
            <div className="sur-titre">
              <h3 className="titre">{chambre.title}</h3>
              <p className="location"> {chambre.location}</p>
            </div>
            <div className="tag-container">
              {chambre.tags.map((tag, index) => (
                <div key={index} className="tag-item">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="block-droit">
            <div className="block-host">
              <p className="host"> {chambre.host.name}</p>
              <div className="rond" style={{ backgroundImage: `url(${chambre.host.picture})` }}>
                {" "}
              </div>
            </div>
            <p className="rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < chambre.rating ? "etoile-colore" : "etoile-grise"} />
              ))}
            </p>
          </div>
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
