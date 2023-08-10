import React from "react";
import { useNavigate } from "react-router-dom";
import { ListeChambre } from "../data/ListeChambres";
import Card from "./Card";

function CardAppartements() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Rediriger l'utilisateur vers la page CardDetails avec l'ID de la chambre
    navigate(`/CardDetails/${id}`);
  };

  return (
    <div>
      <ul className="liste-chambres">
        {ListeChambre.map(({ id, title, cover, host, pictures, description, rating, location, equipments, tag }) => (
          <Card
            key={id}
            id={id}
            title={title}
            cover={cover}
            host={host}
            pictures={pictures}
            description={description}
            rating={rating}
            location={location}
            equipments={equipments}
            tag={tag}
            onClick={() => handleCardClick(id)} // Passer la fonction de gestion du clic à la card
          />
        ))}
      </ul>
    </div>
  );
}

export default CardAppartements;
