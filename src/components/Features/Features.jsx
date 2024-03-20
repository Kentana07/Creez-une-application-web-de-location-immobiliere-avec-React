import React from "react";
import "./Features.css"; // Import du fichier CSS pour le style

// Déclaration du composant Features avec une fonction
function Features(props) {
  return (
    <div className="informations-of-lodging"> {/* Conteneur global pour les informations du logement */}
      <div>
        <h2 className="lodging-title-in-lodging-page">{props.title}</h2> {/* Titre du logement */}
        <p className="location-of-lodging">{props.location}</p> {/* Emplacement du logement */}
        <div className="button-tag-style">
          {/* Utilisation de la méthode map sur le tableau props.tag pour itérer sur chaque élément tag et créer des boutons correspondants */}
          {props.tag &&
            props.tag.length > 0 &&
            props.tag.map((tag, index) => <button key={index}>{tag}</button>)}
        </div>
      </div>
      <div>
        <div className="host-informations">
          <p>{props.host}</p> {/* Informations sur l'hôte */}
          <img
            src={props.picture}
            alt="Accommodation host"
            title="Picture of host"
          /> {/* Image de l'hôte */}
        </div>
        <div className="stars-of-lodging">{props.rating}</div> {/* Évaluation du logement */}
      </div>
    </div>
  );
}

export default Features;
