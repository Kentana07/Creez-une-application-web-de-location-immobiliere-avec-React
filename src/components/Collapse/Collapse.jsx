import React, { useState } from "react";
import "./Collapse.css"; // Import du fichier CSS pour le style
import arrowopen from "../../assets/arrowopen.png"; // Import de l'icône de flèche

// Déclaration du composant Collapse avec une fonction
function Collapse(props) {
  // Définition de l'état local `isOpen` à l'aide du hook useState
  const [isOpen, setIsOpen] = useState(
    props.open !== undefined ? props.open : false
  );

  // Fonction de gestion de l'événement qui mettra à jour la valeur de isOpen lorsque l'utilisateur cliquera sur l'un des collapses
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-drop-down-list"> {/* Conteneur global du collapse */}
      {/* Titre du collapse avec icône de flèche pour indiquer l'état d'ouverture */}
      <h3 onClick={handleClick}>
        {props.title}
        <img
          className={isOpen ? "arrow arrow-to-close" : "arrow arrow-to-open"} // Classe CSS de l'icône en fonction de l'état isOpen
          src={arrowopen}
          alt="show content"
        />
      </h3>
      {/* Contenu du collapse, affiché si isOpen est true */}
      {isOpen && <div className="content-in-collapse">{props.content}</div>}
    </div>
  );
}

export default Collapse;
