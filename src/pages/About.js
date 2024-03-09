import React from 'react';
import { useState, useEffect } from "react";
import image from '../assets/imgbannerabout.png';
import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';

// Creating About page with the function declaration that creates the About functional component
function About() {

	// Using useState to initialize the local state of aboutData with an empty array
	const [aboutData, setAboutData] = useState([]);

	// Using the useEffect hook to do a request with fetch to get the aboutData data from the local JSON file (about.json)
	useEffect(() => {
		fetch("http://localhost:3000/about.json")
			.then(function (response) {
				return response.json()
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
				<div className='banner-style-in-about-page'>
					{/* Use of the Banner component */}
					<Banner
						image={image}
					/>
				</div>
			</section>
			<section>
				{/* Use of the Collapse component */}
				{/* The . map() method is used to iterate on each element of the aboutData array. For each aboutData, the Collapse component is rendered */}
				{aboutData && aboutData.length > 0 && aboutData.map((data, index) =>
					<div className='style-collapse-in-about-page' key={index}>
						<Collapse
							title={data.title}
							content={data.content}
						/>
					</div>
				)}
			</section>
		</main>
	);
};

export default About;