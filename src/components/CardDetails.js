import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { ListeChambre } from "../data/ListeChambres";
import Carousel from "./Carroussel";

function CardDetails() {
  const { id } = useParams();
  const chambre = ListeChambre.find((chambre) => chambre.id === id);

  if (!chambre) {
    return <div>Chambre non trouvée</div>;
  }

  return (
    <div>
      <Header />
      <div className="card-details">
        <Carousel images={chambre.pictures} />
        <h2>{chambre.title}</h2>
        <p>{chambre.description}</p>
        <p>Rating: {chambre.rating}</p>
        <p>Location: {chambre.location}</p>
        <p>Équipements: {chambre.equipments.join(", ")}</p>
        <p>Tag: {chambre.tags}</p>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
