import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link de React Router
import "./404.css"; // Import du fichier CSS pour le style

// Déclaration du composant 404 avec une fonction
function Error() {
  return (
    <main>
      <section>
        <h2 className="title-error">404</h2> {/* Titre de l'erreur 404 */}
        <p className="p-error">
          <span>Oups! La page que</span>{" "}
          <span>vous demandez n'existe pas.</span> {/* Message d'erreur */}
        </p>
        {/* Lien de retour vers la page d'accueil */}
        <Link className="link-error" to="/">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </main>
  );
}

export default Error;
