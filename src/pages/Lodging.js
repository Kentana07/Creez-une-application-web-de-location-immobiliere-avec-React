import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapse from '../components/Collapse/Collapse';
import Gallery from '../components/Gallery/Gallery';
import redstar from '../assets/redstar.png';
import greystar from '../assets/greystar.png';
import Features from '../components/Features/Features';

function Lodging() {

	// Using the useParams hook of React Router to extract the value of the URL parameter called "id" and thus recover the value of the housing ID from the URL
	const idLodging = useParams('id').id;

	// Using the useNavigate hook to get the navigation function that will be used to redirect the user
	const navigate = useNavigate();

	// Using the useState hook to initialize the local state of lodging with null
	const [lodging, setLodging] = useState(null);

	// Using the useEffect hook to do a request with fetch to get the lodging data from the local JSON file (lodgings.json)
	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json")
			.then(function (response) {
				return response.json()
			})
			.then(function (json) {
				const data = json.find(data => data.id === idLodging) || null;
				if (data === null) {
					return navigate("/404");
				} else {
					setLodging(data);
				}
			})
			.catch(function (e) {
				console.log(e);
			});
	}, [idLodging, navigate]);

	// Set the renderStars function to generate the star images corresponding to the rating assigned to each lodging
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			const starImage = i <= lodging.rating ? redstar : greystar;
			stars.push(
				<img
					key={i}
					src={starImage}
					alt="Lodging of rating"
					title="Number of stars for accommodation"
				/>
			);
		}
		return stars;
	};

	return (
		<main>
			{lodging && (
				<div>
					<section>
						<div>
							{/* Use of the Gallery component */}
							<Gallery
								pictures={lodging.pictures}
								title={lodging.title}
							/>
						</div>
					</section>
					<section>
						{/* Use of the Features component */}
						<Features
							title={lodging.title}
							location={lodging.location}
							tag={lodging.tags}
							host={
								<span>
									{lodging.host.name.split(' ')[0]}<br />
									{lodging.host.name.split(' ')[1]}
								</span>
							}
							picture={lodging.host.picture}
							rating={renderStars()}
						/>
						{/* Use of the Collapse component */}
						<div className='style-collapse-in-lodging-page'>
							<div className='collapse-in-lodging'>
								<Collapse
									title={'Description'}
									content={lodging.description}
								/>
							</div>
							<div className='collapse-in-lodging'>
								<Collapse
									title={'Équipements'}
									content={lodging.equipments && lodging.equipments.length > 0 && lodging.equipments.map((equipment, index) => (
										<div className='details-equipments' key={index}>{equipment}</div>
									))}
								/>
							</div>
						</div>
					</section>
				</div>
			)}
		</main>
	);
};

export default Lodging;