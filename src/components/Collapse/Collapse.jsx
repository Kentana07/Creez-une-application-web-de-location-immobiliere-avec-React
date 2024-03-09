import React, { useState } from 'react';
import './Collapse.css';
import arrowopen from '../../assets/arrowopen.png';

// Collapse component declaration with a function 
function Collapse(props) {
	
	// Definition of the local state of `is open` using the useState hook
	const [isOpen, setIsOpen] = useState(props.open !== undefined ? props.open: false);
	// Creation of an event management function that will update the value of isOpen when the user clicks on one of the collapses
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
   
	return (
		<div className='collapse-drop-down-list'>
			<h3 onClick={handleClick}>
				{props.title}
				<img className={isOpen ? 'arrow arrow-to-close': 'arrow arrow-to-open'}
					src={arrowopen}
					alt="show content"
				/>
			</h3>
			{isOpen && <div className='content-in-collapse'>{props.content}</div>}
	  	</div>
  	);
};

export default Collapse;
