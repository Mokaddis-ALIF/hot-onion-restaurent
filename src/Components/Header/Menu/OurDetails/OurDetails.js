import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import our1 from '../../../../Images/our1.png';
import our2 from '../../../../Images/our2.png';
import our3 from '../../../../Images/our3.png';
import './OurDetails.css';
import delivery from '../../../../Images/ICON/Group 245.png';
import train from '../../../../Images/ICON/Group 204.png';
import ring from '../../../../Images/ICON/Group 1133.png';
import Button from 'react-bootstrap/Button';

const OurDetails = () => {
	return (
		<Container className="pb-3">
			<div>
				<h1 className="text-start ">Why Choose us</h1>
			</div>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image src={our1} className="img-fluid" />
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={delivery} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>Fast Delivery</h5>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Consequatur numquam
										</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image src={our2} className="img-fluid" />
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={train} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>A Good Responder</h5>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Consequatur numquam
										</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image src={our3} className="img-fluid" />
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={ring} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>Home Delivery</h5>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Consequatur numquam
										</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default OurDetails;
