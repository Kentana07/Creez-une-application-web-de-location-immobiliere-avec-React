import React, { useState, useEffect } from "react"; // Import de React et des hooks useState et useEffect
import "./Home.css"; // Import du fichier CSS pour le style
import Banner from "../../components/Banner/Banner"; // Import du composant Banner
import image from "../../assets/imgbannerhome.png"; // Import de l'image pour la bannière
import Card from "../../components/Card/Card"; // Import du composant Card

// Déclaration du composant Home avec une fonction
function Home() {
  // Utilisation du useState pour initialiser l'état local "lodgings" avec un tableau vide
  const [lodgings, setLodgings] = useState([]);

  // Utilisation du useEffect pour effectuer une requête avec fetch afin d'obtenir les données des logements à partir du fichier JSON local (lodgings.json)
  useEffect(() => {
    fetch("http://localhost:3000/lodgings.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setLodgings(json);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section>
        <div className="banner-style-in-home-page">
          {/* Utilisation du composant Banner */}
          <Banner title={"Chez vous, partout et ailleurs"} image={image} />
        </div>
      </section>
      <section>
        <div className="lodging-list">
          {/* Utilisation du composant Card */}
          {/* La méthode .map() est utilisée pour itérer sur chaque élément du tableau "lodgings". Pour chaque logement, le composant Card est rendu */}
          {lodgings &&
            lodgings.length > 0 &&
            lodgings.map((lodging) => (
              <Card
                key={lodging.id} // Utilisation de la clé unique "id" pour chaque logement
                id={lodging.id}
                title={lodging.title}
                cover={lodging.cover}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
