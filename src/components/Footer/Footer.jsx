import React from "react";
import "./Footer.css"; // Import du fichier CSS pour le style
import logo from "../../assets/logofooter.png"; // Import de l'image du logo
import { Link } from "react-router-dom"; // Import de Link pour gérer les liens internes

// Déclaration du composant Footer avec une fonction
function Footer() {
  return (
    <footer>
      <div className="footer-style"> {/* Conteneur global pour le footer */}
        <Link to={"/"}> {/* Lien pour retourner à la page d'accueil */}
          <div>
            <img src={logo} alt="Logo Kasa" title="Logo Kasa" /> {/* Image du logo Kasa */}
          </div>
        </Link>
        <div>
          <p>© 2020 Kasa. All rights reserved</p> {/* Mention de droits d'auteur */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
