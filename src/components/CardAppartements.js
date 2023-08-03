import React from "react";
import { ListeChambre } from "../data/ListeChambres";
import Card from "./Card";

function CardAppartements() {
  return (
    <div>
      <ul className="liste-chambres">
        {ListeChambre.map(({ id, title, cover, pictures, description }) => (
          <Card key={id} title={title} cover={cover} pictures={pictures} description={description} />
        ))}
      </ul>{" "}
    </div>
  );
}

export default CardAppartements;
