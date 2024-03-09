import React from 'react';
import './Header.css';
import logo from '../../assets/logokasa.png';
import { Link, useLocation } from 'react-router-dom';

// Header component declaration with a function
function Header() {

	// Uses the useLocation hook provided by React Router to get the `location` object that contains information about the current URL
	const location = useLocation();
	return (
		<header>
			<div className='header-style'>
				<h1><Link to="/"><img src={logo} alt="Logo Kasa" title="Logo Kasa" /></Link></h1>
				<nav>
					<ul>
						<li>
							<Link to="/" className={location.pathname === '/' ? 'active space-nav-link-home' : ' space-nav-link-home'}>
								Accueil
							</Link>
						</li>
						<li>
							<Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
								À Propos
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

