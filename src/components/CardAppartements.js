import React, { useState, useEffect } from "react";
import Card from "./Card";

const AppartementsComponent = () => {
  // État local pour stocker les données JSON des appartements
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    // Fonction pour charger les données à partir du fichier JSON
    const chargerAppartements = async () => {
      try {
        const response = await fetch("../data/Datas.JSON");
        if (!response.ok) {
          throw new Error("Réponse réseau incorrecte.");
        }
        const data = await response.json();
        setAppartements(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données JSON :", error);
      }
    };

    // Appelle la fonction pour charger les appartements au montage du composant
    chargerAppartements();
  }, []);

  // Composant imbriqué CardAppartements
  function CardAppartements() {
    return (
      <div className="grille-appart">
        <div className="appartements-list">
          {appartements.map((appartement) => (
            <Card key={appartement.id} appartement={appartement} />
          ))}
        </div>
      </div>
    );
  }

  // Rendre le composant imbriqué
  return <CardAppartements />;
};

export default AppartementsComponent;
