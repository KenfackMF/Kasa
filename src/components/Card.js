import React from "react";

function Card({ id, title, cover, onClick }) {
  return (
    <div className="chambre" onClick={() => onClick(id)}>
      <div className="cover" style={{ backgroundImage: `url(${cover})` }} />
      <div className="details">
        <span className="title">{title}</span>
      </div>
    </div>
  );
}

export default Card;
