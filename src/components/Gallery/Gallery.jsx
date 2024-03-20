import React, { useState } from "react";
import "./Gallery.css"; // Import du fichier CSS pour le style
import arrowprevious from "../../assets/arrowprevious.png"; // Import de l'image de la flèche précédente
import arrownext from "../../assets/arrownext.png"; // Import de l'image de la flèche suivante

// Déclaration du composant Gallery avec une fonction
function Gallery(props) {
  // Définition de l'état local `slideIndex` initialisé à 0 à l'aide du hook useState
  const [slideIndex, setSlideIndex] = useState(0);

  // Fonction pour passer à l'image précédente dans le composant Gallery
  const prevSlide = () => {
    setSlideIndex(
      slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1
    );
  };

  // Fonction pour passer à l'image suivante dans le composant Gallery
  const nextSlide = () => {
    setSlideIndex(
      slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1
    );
  };

  return (
    <div className="slider"> {/* Conteneur principal pour la galerie */}
      {/* Utilisation de la méthode map sur le tableau props.pictures pour itérer sur chaque élément image */}
      {props.pictures &&
        props.pictures.length > 0 &&
        props.pictures.map((picture, index) => (
          <div key={index}>
            <img
              className={
                index === slideIndex
                  ? `slider-item slider-item-${index} slider-item-show`
                  : `slider-item slider-item-${index}`
              }
              src={picture}
              alt={props.title}
              title={props.title}
            />
            {/* Vérification que props.pictures contient plus d'une image */}
            {props.pictures.length > 1 && (
              <div>
                <div className="arrow-position-to-switch">
                  {/* Flèche précédente pour passer à l'image précédente */}
                  <img
                    className="arrow-previous"
                    src={arrowprevious}
                    alt="previous visual"
                    onClick={prevSlide}
                  />
                  <div>
                    {/* Affichage du numéro de l'image actuelle sur le nombre total d'images */}
                    <p className="counter">
                      {slideIndex + 1} / {props.pictures.length}
                    </p>
                  </div>
                  {/* Flèche suivante pour passer à l'image suivante */}
                  <img
                    className="arrow-next"
                    src={arrownext}
                    alt="next visual"
                    onClick={nextSlide}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Gallery;
