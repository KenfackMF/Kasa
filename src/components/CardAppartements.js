import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function CardAppartements() {
  const navigate = useNavigate();
  const [listeChambres, setListeChambres] = useState([]);

  useEffect(() => {
    fetch("/ListeChambres.json")
      .then((response) => response.json())
      .then((data) => setListeChambres(data))
      .catch((error) => console.error("Erreur lors du chargement du fichier JSON", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/CardDetails/${id}`);
  };

  return (
    <div>
      <div className="liste-chambres">
        {listeChambres.map(({ id, title, cover, host, pictures, description, rating, location, equipments, tag }) => (
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
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardAppartements;
