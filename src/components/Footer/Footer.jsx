import React from 'react';
import './Footer.css';
import logo from '../../assets/logofooter.png';
import { Link } from 'react-router-dom';

// Footer component declaration with a function
function Footer() {
	return (
		<footer>
			<div className='footer-style'>
				<Link to={'/'}>
					<div>
						<img src={logo} alt="Logo Kasa" title="Logo Kasa" />
					</div>
				</Link>
				<div>
					<p>© 2020 Kasa. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;