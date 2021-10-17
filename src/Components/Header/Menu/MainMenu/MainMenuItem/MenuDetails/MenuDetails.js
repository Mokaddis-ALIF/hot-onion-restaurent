import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import items from '../../../data';
import './MenuDetails.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const MenuDetails = () => {
	const { id } = useParams();
	const [details, setDetails] = useState([]);
	const [quantity, setQuantity] = useState(1);

	const element1 = <FontAwesomeIcon icon={faPlus} />;
	const element2 = <FontAwesomeIcon icon={faMinus} />;

	const newitem = items.find((item) => item.id == id);
	const { title, price, img, desc } = newitem;

	useEffect(() => {
		if (quantity < 1) setQuantity(1);
	}, [quantity]);

	return (
		<div id="details">
			<Container>
				<Row>
					<Col
						sm={7}
						className="d-flex flex-column justify-content-center align-item-center"
					>
						<div className="text-start">
							<h1>{title}</h1>
							<p>{desc}</p>
							<h1>${price}</h1>
							<div className="d-flex flex-row justify-content-start">
								<Button className="mx-1" variant="danger">
									Add
								</Button>
								<Button
									className="mx-1 ms-3"
									onClick={() => setQuantity(quantity + 1)}
									variant="light"
								>
									{element1}
								</Button>
								<span className="text-danger mx-1">{quantity}</span>
								<Button
									className="mx-1"
									onClick={() => setQuantity(quantity - 1)}
									variant="light"
								>
									{element2}
								</Button>
							</div>
						</div>
					</Col>
					<Col sm={5}>
						<Image src={img} fluid />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MenuDetails;
