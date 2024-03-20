import React, { useState, useEffect } from "react"; // Import de React et des hooks useState et useEffect
import image from "../assets/imgbannerabout.png"; // Import de l'image pour la bannière
import Banner from "../components/Banner/Banner"; // Import du composant Banner
import Collapse from "../components/Collapse/Collapse"; // Import du composant Collapse

// Déclaration du composant About avec une fonction
function About() {
  // Utilisation du useState pour initialiser l'état local "aboutData" avec un tableau vide
  const [aboutData, setAboutData] = useState([]);

  // Utilisation du useEffect pour effectuer une requête avec fetch afin d'obtenir les données de "aboutData" à partir du fichier JSON local (about.json)
  useEffect(() => {
    fetch("http://localhost:3000/about.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setAboutData(json);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section>
        <div className="banner-style-in-about-page">
          {/* Utilisation du composant Banner */}
          <Banner image={image} />
        </div>
      </section>
      <section>
        {/* Utilisation du composant Collapse */}
        {/* La méthode .map() est utilisée pour itérer sur chaque élément du tableau "aboutData". Pour chaque "aboutData", le composant Collapse est rendu */}
        {aboutData &&
          aboutData.length > 0 &&
          aboutData.map((data, index) => (
            <div className="style-collapse-in-about-page" key={index}>
              <Collapse title={data.title} content={data.content} />
            </div>
          ))}
      </section>
    </main>
  );
}

export default About;
