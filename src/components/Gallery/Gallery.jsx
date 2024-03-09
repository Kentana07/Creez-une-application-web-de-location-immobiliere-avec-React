import React from 'react';
import './Gallery.css'; 
import { useState } from "react";
import arrowprevious from '../../assets/arrowprevious.png';
import arrownext from '../../assets/arrownext.png';

// Gallery component declaration with a function 
function Gallery(props) {

	// Definition of the local state of `slideIndex` to 0 using the useState hook
	const [slideIndex, setSlideIndex] = useState(0);

	// Declaration of a function that will be used to move to the previous image in the Gallery component
	const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1);
	};

	// Declaration of a function that will be used to move to the next image in the Gallery component
	const nextSlide = () => {
		setSlideIndex(slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1);
	};

	return (
		<div className="slider">
			{/* Using the map method on the props.pictures array to iterate on each picture element */}
			{props.pictures && props.pictures.length > 0 && props.pictures.map((picture, index) => 
				<div key={index}>
					<img className={(index === slideIndex) ? `slider-item slider-item-${index} slider-item-show` : `slider-item slider-item-${index}`} src={picture} alt={props.title} title={props.title}/>
					{/* Check that props.pictures is well above 1 */}
					{props.pictures.length > 1 && (
						<div>
							<div className='arrow-position-to-switch'>
								<img
									className='arrow-previous'
									src={arrowprevious}
									alt="previous visual"
									onClick={prevSlide}
								/>
								<div>
									<p className='counter'>{slideIndex + 1} / {props.pictures.length}</p>
								</div>
								<img
									className='arrow-next'
									src={arrownext}
									alt="next visual"
									onClick={nextSlide}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Gallery;