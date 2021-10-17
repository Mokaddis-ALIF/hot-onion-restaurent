import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainMenuItem.css';

const MainMenuItem = ({ menuItem, mealId }) => {
	const { id, img, title, desc, price } = menuItem;
	return (
		<div className="col-md-4 py-2 my-2" id="card">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<Image src={img} className="w-50" fluid />

				<h5 className="mt-3">{title}</h5>
				<p>{desc}</p>
				<h6>
					<b>${price}</b>
				</h6>
				<Link to={`/details/${id}`}>
					<button className="btn btn-outline-success p-2 mb-2">Details</button>
				</Link>
			</div>
		</div>
	);
};

export default MainMenuItem;
