import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
	const { users, handleSignIn } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const ui = location.state?.from || '/home';

	const handleGoogleSignIn = () => {
		handleSignIn().then((res) => history.push(ui));
	};
	return (
		<div id="login">
			<div className="text-center text-primary">
				<h1>Login here</h1>
			</div>
			<h1>{users.email}</h1>
			<form className="w-50 mx-auto">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						required
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Login
				</button>
				<br />
			</form>
			<div className="text-center">OR</div>
			<div className="text-center">
				<button onClick={handleGoogleSignIn} className="btn btn-primary my-5">
					Login by Google
				</button>
			</div>
			<br />
			<div className="text-center">OR</div>
			<center>
				<Link className="text-primary" to="/register">
					Register here
				</Link>
			</center>
		</div>
	);
};

export default Login;
