import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../Images/logo2.png';
const Footer = () => {
	return (
		<div className="bg-dark py-5">
			<Container>
				<Row>
					<Col
						md={3}
						className="d-flex flex-column align-item-between text-start"
					>
						<div className="mb-5">
							<Image src={logo} fluid className="w-50" />
						</div>
						<div>
							<p className="text-white">&copy; 2021</p>
						</div>
					</Col>
					<Col md={9}></Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
