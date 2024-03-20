import React from "react";
import "./Header.css"; // Import du fichier CSS pour le style
import logo from "../../assets/logokasa.png"; // Import de l'image du logo
import { Link, useLocation } from "react-router-dom"; // Import du composant Link et du hook useLocation de React Router

// Déclaration du composant Header avec une fonction
function Header() {
  // Utilisation du hook useLocation pour obtenir l'objet `location` contenant des informations sur l'URL actuelle
  const location = useLocation();
  return (
    <header>
      <div className="header-style"> {/* Conteneur principal pour l'en-tête */}
        <h1>
          {/* Lien vers la page d'accueil avec le logo de Kasa */}
          <Link to="/">
            <img src={logo} alt="Logo Kasa" title="Logo Kasa" />
          </Link>
        </h1>
        <nav>
          <ul> {/* Liste des liens de navigation */}
            <li>
              {/* Lien vers la page d'accueil avec classe active si l'URL correspond à "/" */}
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "active space-nav-link-home" // Classe active pour le style CSS
                    : " space-nav-link-home"
                }
              >
                Accueil
              </Link>
            </li>
            <li>
              {/* Lien vers la page À Propos avec classe active si l'URL correspond à "/about" */}
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                À Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
