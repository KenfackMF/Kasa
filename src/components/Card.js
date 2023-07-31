import React from "react";

function Card({ appartement }) {
  return (
    <div className="card">
      <img src={appartement.imageDeCouverture} alt={appartement.titre} />
      <div className="card-body">
        <h2>{appartement.titre}</h2>
        <p>{appartement.description}</p>
        <p>Prix: {appartement.prix} €</p>
        <p>Surface: {appartement.surface} m²</p>
      </div>
    </div>
  );
}

export default Card;
