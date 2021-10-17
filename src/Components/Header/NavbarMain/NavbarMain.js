import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../Images/logo.png';
import './NavbarMain.css';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavbarMain = () => {
	const { users, logOut } = useAuth();
	return (
		<Navbar bg="light">
			<Container>
				<div>
					<Navbar.Brand>
						<Link to="/menu">
							<Image src={logo} alt="" thumbnail id="navbar-logo" />
						</Link>
					</Navbar.Brand>
				</div>
				<div className="d-flex">
					{users.email ? (
						<button onClick={logOut} className="btn btn-danger">
							Logout
						</button>
					) : (
						<div>
							<NavLink
								to="/login"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								className="me-3"
								variant="light"
							>
								<Button className="btn">Login</Button>
							</NavLink>
							<NavLink
								to="/register"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								variant="danger"
							>
								<button className="btn btn-danger">Sign up</button>
							</NavLink>
						</div>
					)}
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarMain;
