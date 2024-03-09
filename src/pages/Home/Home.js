import React from 'react';
import { useState, useEffect } from "react";
import './Home.css';
import Banner from "../../components/Banner/Banner";
import image from '../../assets/imgbannerhome.png';
import Card from '../../components/Card/Card';

// Creating Home page with the function declaration that creates the Home functional component
function Home() {
	
	// Using useState to initialize lodgings local state with an empty array
	const [lodgings, setLodgings] = useState([]);

	// Using the useEffect hook to do a request with fetch to get the lodging data from the local JSON file (lodgings.json)
	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json")
			.then(function (response) {
				return response.json()
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
				<div className='banner-style-in-home-page'>
					{/* Use of the Banner component */}
					<Banner
						title={'Chez vous, partout et ailleurs'}
						image={image}
					/>
				</div>
			</section>
			<section>
				<div className="lodging-list">
					{/* Use of the Card component */}
					{/* The . map() method is used to iterate on each element of the lodgings array. For each lodging, the Card component is rendered */}
					{lodgings && lodgings.length > 0 && lodgings.map((lodging) =>
						<Card
							key={lodging.id}
							id={lodging.id}
							title={lodging.title}
							cover={lodging.cover}
						/>
					)}
				</div>
			</section>
		</main>
	);
};

export default Home;

