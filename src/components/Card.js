import React from "react";

function Card({ title, cover }) {
  return (
    <div className="chambre">
      <div className="cover" style={{ backgroundImage: `url(${cover})` }} />
      <div className="details">
        <span className="title">{title}</span>
      </div>
    </div>
  );
}

export default Card;
